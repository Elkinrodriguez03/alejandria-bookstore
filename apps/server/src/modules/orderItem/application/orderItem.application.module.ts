import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OrderItemDomainModule } from '../domain'
import { OrderItemController } from './orderItem.controller'

import { OrderDomainModule } from '../../../modules/order/domain'

import { OrderItemByOrderController } from './orderItemByOrder.controller'

import { BookDomainModule } from '../../../modules/book/domain'

import { OrderItemByBookController } from './orderItemByBook.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    OrderItemDomainModule,

    OrderDomainModule,

    BookDomainModule,
  ],
  controllers: [
    OrderItemController,

    OrderItemByOrderController,

    OrderItemByBookController,
  ],
  providers: [],
})
export class OrderItemApplicationModule {}
