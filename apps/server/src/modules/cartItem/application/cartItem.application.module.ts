import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { CartItemDomainModule } from '../domain'
import { CartItemController } from './cartItem.controller'

import { CartDomainModule } from '../../../modules/cart/domain'

import { CartItemByCartController } from './cartItemByCart.controller'

import { BookDomainModule } from '../../../modules/book/domain'

import { CartItemByBookController } from './cartItemByBook.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    CartItemDomainModule,

    CartDomainModule,

    BookDomainModule,
  ],
  controllers: [
    CartItemController,

    CartItemByCartController,

    CartItemByBookController,
  ],
  providers: [],
})
export class CartItemApplicationModule {}
