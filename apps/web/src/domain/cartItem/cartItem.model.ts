import { Cart } from '../cart'

import { Book } from '../book'

export class CartItem {
  id: string

  quantity: number

  cartId?: string

  cart?: Cart

  bookId?: string

  book?: Book

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
