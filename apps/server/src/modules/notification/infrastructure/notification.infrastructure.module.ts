import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationAuthorSubscriber } from './subscribers/notification.author.subscriber'

import { NotificationCategorySubscriber } from './subscribers/notification.category.subscriber'

import { NotificationBookSubscriber } from './subscribers/notification.book.subscriber'

import { NotificationBookCategorySubscriber } from './subscribers/notification.bookCategory.subscriber'

import { NotificationCartSubscriber } from './subscribers/notification.cart.subscriber'

import { NotificationCartItemSubscriber } from './subscribers/notification.cartItem.subscriber'

import { NotificationOrderSubscriber } from './subscribers/notification.order.subscriber'

import { NotificationOrderItemSubscriber } from './subscribers/notification.orderItem.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationAuthorSubscriber,

    NotificationCategorySubscriber,

    NotificationBookSubscriber,

    NotificationBookCategorySubscriber,

    NotificationCartSubscriber,

    NotificationCartItemSubscriber,

    NotificationOrderSubscriber,

    NotificationOrderItemSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
