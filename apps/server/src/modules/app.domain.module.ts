import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { AuthorDomainModule } from './author/domain'

import { CategoryDomainModule } from './category/domain'

import { BookDomainModule } from './book/domain'

import { BookCategoryDomainModule } from './bookCategory/domain'

import { CartDomainModule } from './cart/domain'

import { CartItemDomainModule } from './cartItem/domain'

import { OrderDomainModule } from './order/domain'

import { OrderItemDomainModule } from './orderItem/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    AuthorDomainModule,

    CategoryDomainModule,

    BookDomainModule,

    BookCategoryDomainModule,

    CartDomainModule,

    CartItemDomainModule,

    OrderDomainModule,

    OrderItemDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
