import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BookCategoryDomainFacade } from '@server/modules/bookCategory/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BookCategoryApplicationEvent } from './bookCategory.application.event'
import { BookCategoryCreateDto } from './bookCategory.dto'

import { BookDomainFacade } from '../../book/domain'

@Controller('/v1/books')
export class BookCategoryByBookController {
  constructor(
    private bookDomainFacade: BookDomainFacade,

    private bookCategoryDomainFacade: BookCategoryDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/book/:bookId/bookCategorys')
  async findManyBookId(
    @Param('bookId') bookId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.bookDomainFacade.findOneByIdOrFail(bookId)

    const items = await this.bookCategoryDomainFacade.findManyByBook(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/book/:bookId/bookCategorys')
  async createByBookId(
    @Param('bookId') bookId: string,
    @Body() body: BookCategoryCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, bookId }

    const item = await this.bookCategoryDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BookCategoryApplicationEvent.BookCategoryCreated.Payload>(
      BookCategoryApplicationEvent.BookCategoryCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
