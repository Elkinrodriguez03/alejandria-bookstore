import { User } from '../user'

import { OrderItem } from '../orderItem'

export class Order {
  id: string

  totalPrice: number

  userId?: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  orderItems?: OrderItem[]
}
