import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BookCategoryDomainFacade } from '@server/modules/bookCategory/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BookCategoryApplicationEvent } from './bookCategory.application.event'
import { BookCategoryCreateDto } from './bookCategory.dto'

import { CategoryDomainFacade } from '../../category/domain'

@Controller('/v1/categorys')
export class BookCategoryByCategoryController {
  constructor(
    private categoryDomainFacade: CategoryDomainFacade,

    private bookCategoryDomainFacade: BookCategoryDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/category/:categoryId/bookCategorys')
  async findManyCategoryId(
    @Param('categoryId') categoryId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.categoryDomainFacade.findOneByIdOrFail(categoryId)

    const items = await this.bookCategoryDomainFacade.findManyByCategory(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/category/:categoryId/bookCategorys')
  async createByCategoryId(
    @Param('categoryId') categoryId: string,
    @Body() body: BookCategoryCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, categoryId }

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
