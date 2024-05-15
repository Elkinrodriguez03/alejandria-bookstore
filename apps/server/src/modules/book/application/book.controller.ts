import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Book, BookDomainFacade } from '@server/modules/book/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BookApplicationEvent } from './book.application.event'
import { BookCreateDto, BookUpdateDto } from './book.dto'

@Controller('/v1/books')
export class BookController {
  constructor(
    private eventService: EventService,
    private bookDomainFacade: BookDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.bookDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: BookCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.bookDomainFacade.create(body)

    await this.eventService.emit<BookApplicationEvent.BookCreated.Payload>(
      BookApplicationEvent.BookCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:bookId')
  async findOne(@Param('bookId') bookId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.bookDomainFacade.findOneByIdOrFail(
      bookId,
      queryOptions,
    )

    return item
  }

  @Patch('/:bookId')
  async update(@Param('bookId') bookId: string, @Body() body: BookUpdateDto) {
    const item = await this.bookDomainFacade.findOneByIdOrFail(bookId)

    const itemUpdated = await this.bookDomainFacade.update(
      item,
      body as Partial<Book>,
    )
    return itemUpdated
  }

  @Delete('/:bookId')
  async delete(@Param('bookId') bookId: string) {
    const item = await this.bookDomainFacade.findOneByIdOrFail(bookId)

    await this.bookDomainFacade.delete(item)

    return item
  }
}
