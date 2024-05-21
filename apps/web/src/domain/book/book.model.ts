import { Author } from '../author'

import { User } from '../user'

import { BookCategory } from '../bookCategory'

import { CartItem } from '../cartItem'

import { OrderItem } from '../orderItem'

export class Book {
  id: string

  title: string

  description?: string

  price: number

  previewImageUrl?: string

  authorId?: string

  author?: Author

  sellerId?: string

  seller?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  bookCategorys?: BookCategory[]

  cartItems?: CartItem[]

  orderItems?: OrderItem[]

  authorPub: string

  genre: string

  publisher: string

  quantity: number
}
