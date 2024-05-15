import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { AuthorApplicationModule } from './author/application'

import { CategoryApplicationModule } from './category/application'

import { BookApplicationModule } from './book/application'

import { BookCategoryApplicationModule } from './bookCategory/application'

import { CartApplicationModule } from './cart/application'

import { CartItemApplicationModule } from './cartItem/application'

import { OrderApplicationModule } from './order/application'

import { OrderItemApplicationModule } from './orderItem/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    AuthorApplicationModule,

    CategoryApplicationModule,

    BookApplicationModule,

    BookCategoryApplicationModule,

    CartApplicationModule,

    CartItemApplicationModule,

    OrderApplicationModule,

    OrderItemApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
