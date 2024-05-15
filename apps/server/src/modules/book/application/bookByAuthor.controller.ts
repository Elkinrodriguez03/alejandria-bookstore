import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BookDomainFacade } from '@server/modules/book/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BookApplicationEvent } from './book.application.event'
import { BookCreateDto } from './book.dto'

import { AuthorDomainFacade } from '../../author/domain'

@Controller('/v1/authors')
export class BookByAuthorController {
  constructor(
    private authorDomainFacade: AuthorDomainFacade,

    private bookDomainFacade: BookDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/author/:authorId/books')
  async findManyAuthorId(
    @Param('authorId') authorId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.authorDomainFacade.findOneByIdOrFail(authorId)

    const items = await this.bookDomainFacade.findManyByAuthor(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/author/:authorId/books')
  async createByAuthorId(
    @Param('authorId') authorId: string,
    @Body() body: BookCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, authorId }

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
