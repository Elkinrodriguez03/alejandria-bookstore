import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { CartItemDomainFacade } from '@server/modules/cartItem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { CartItemApplicationEvent } from './cartItem.application.event'
import { CartItemCreateDto } from './cartItem.dto'

import { BookDomainFacade } from '../../book/domain'

@Controller('/v1/books')
export class CartItemByBookController {
  constructor(
    private bookDomainFacade: BookDomainFacade,

    private cartItemDomainFacade: CartItemDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/book/:bookId/cartItems')
  async findManyBookId(
    @Param('bookId') bookId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.bookDomainFacade.findOneByIdOrFail(bookId)

    const items = await this.cartItemDomainFacade.findManyByBook(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/book/:bookId/cartItems')
  async createByBookId(
    @Param('bookId') bookId: string,
    @Body() body: CartItemCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, bookId }

    const item = await this.cartItemDomainFacade.create(valuesUpdated)

    await this.eventService.emit<CartItemApplicationEvent.CartItemCreated.Payload>(
      CartItemApplicationEvent.CartItemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
