import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Author as AuthorModel } from './author/author.model'

import { Category as CategoryModel } from './category/category.model'

import { Book as BookModel } from './book/book.model'

import { BookCategory as BookCategoryModel } from './bookCategory/bookCategory.model'

import { Cart as CartModel } from './cart/cart.model'

import { CartItem as CartItemModel } from './cartItem/cartItem.model'

import { Order as OrderModel } from './order/order.model'

import { OrderItem as OrderItemModel } from './orderItem/orderItem.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Author extends AuthorModel {}

  export class Category extends CategoryModel {}

  export class Book extends BookModel {}

  export class BookCategory extends BookCategoryModel {}

  export class Cart extends CartModel {}

  export class CartItem extends CartItemModel {}

  export class Order extends OrderModel {}

  export class OrderItem extends OrderItemModel {}
}
