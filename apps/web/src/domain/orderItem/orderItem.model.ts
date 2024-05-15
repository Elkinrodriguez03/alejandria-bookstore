import { Order } from '../order'

import { Book } from '../book'

export class OrderItem {
  id: string

  quantity: number

  price: number

  orderId?: string

  order?: Order

  bookId?: string

  book?: Book

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
