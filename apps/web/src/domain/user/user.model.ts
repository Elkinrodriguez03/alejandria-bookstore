import { Notification } from '../notification'

import { Book } from '../book'

import { Cart } from '../cart'

import { Order } from '../order'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email?: string
  status: UserStatus
  name?: string
  pictureUrl?: string
  password?: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  booksAsSeller?: Book[]

  carts?: Cart[]

  orders?: Order[]
}
