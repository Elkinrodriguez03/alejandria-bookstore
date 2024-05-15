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
import {
  BookCategory,
  BookCategoryDomainFacade,
} from '@server/modules/bookCategory/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BookCategoryApplicationEvent } from './bookCategory.application.event'
import {
  BookCategoryCreateDto,
  BookCategoryUpdateDto,
} from './bookCategory.dto'

@Controller('/v1/bookCategorys')
export class BookCategoryController {
  constructor(
    private eventService: EventService,
    private bookCategoryDomainFacade: BookCategoryDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.bookCategoryDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: BookCategoryCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.bookCategoryDomainFacade.create(body)

    await this.eventService.emit<BookCategoryApplicationEvent.BookCategoryCreated.Payload>(
      BookCategoryApplicationEvent.BookCategoryCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:bookCategoryId')
  async findOne(
    @Param('bookCategoryId') bookCategoryId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.bookCategoryDomainFacade.findOneByIdOrFail(
      bookCategoryId,
      queryOptions,
    )

    return item
  }

  @Patch('/:bookCategoryId')
  async update(
    @Param('bookCategoryId') bookCategoryId: string,
    @Body() body: BookCategoryUpdateDto,
  ) {
    const item =
      await this.bookCategoryDomainFacade.findOneByIdOrFail(bookCategoryId)

    const itemUpdated = await this.bookCategoryDomainFacade.update(
      item,
      body as Partial<BookCategory>,
    )
    return itemUpdated
  }

  @Delete('/:bookCategoryId')
  async delete(@Param('bookCategoryId') bookCategoryId: string) {
    const item =
      await this.bookCategoryDomainFacade.findOneByIdOrFail(bookCategoryId)

    await this.bookCategoryDomainFacade.delete(item)

    return item
  }
}
