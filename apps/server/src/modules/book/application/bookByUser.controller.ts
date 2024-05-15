import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BookDomainFacade } from '@server/modules/book/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BookApplicationEvent } from './book.application.event'
import { BookCreateDto } from './book.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class BookByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private bookDomainFacade: BookDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/seller/:sellerId/books')
  async findManySellerId(
    @Param('sellerId') sellerId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(sellerId)

    const items = await this.bookDomainFacade.findManyBySeller(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/seller/:sellerId/books')
  async createBySellerId(
    @Param('sellerId') sellerId: string,
    @Body() body: BookCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, sellerId }

    const item = await this.bookDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BookApplicationEvent.BookCreated.Payload>(
      BookApplicationEvent.BookCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
