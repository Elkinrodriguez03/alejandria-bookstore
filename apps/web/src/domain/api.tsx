import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { AuthorApi } from './author/author.api'

import { CategoryApi } from './category/category.api'

import { BookApi } from './book/book.api'

import { BookCategoryApi } from './bookCategory/bookCategory.api'

import { CartApi } from './cart/cart.api'

import { CartItemApi } from './cartItem/cartItem.api'

import { OrderApi } from './order/order.api'

import { OrderItemApi } from './orderItem/orderItem.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Author extends AuthorApi {}

  export class Category extends CategoryApi {}

  export class Book extends BookApi {}

  export class BookCategory extends BookCategoryApi {}

  export class Cart extends CartApi {}

  export class CartItem extends CartItemApi {}

  export class Order extends OrderApi {}

  export class OrderItem extends OrderItemApi {}
}
