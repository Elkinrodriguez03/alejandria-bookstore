import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OrderItemDomainFacade } from '@server/modules/orderItem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OrderItemApplicationEvent } from './orderItem.application.event'
import { OrderItemCreateDto } from './orderItem.dto'

import { BookDomainFacade } from '../../book/domain'

@Controller('/v1/books')
export class OrderItemByBookController {
  constructor(
    private bookDomainFacade: BookDomainFacade,

    private orderItemDomainFacade: OrderItemDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/book/:bookId/orderItems')
  async findManyBookId(
    @Param('bookId') bookId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.bookDomainFacade.findOneByIdOrFail(bookId)

    const items = await this.orderItemDomainFacade.findManyByBook(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/book/:bookId/orderItems')
  async createByBookId(
    @Param('bookId') bookId: string,
    @Body() body: OrderItemCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, bookId }

    const item = await this.orderItemDomainFacade.create(valuesUpdated)

    await this.eventService.emit<OrderItemApplicationEvent.OrderItemCreated.Payload>(
      OrderItemApplicationEvent.OrderItemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
