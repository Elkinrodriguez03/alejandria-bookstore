import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Order } from '../../../modules/order/domain'

import { Book } from '../../../modules/book/domain'

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  quantity: number

  @ColumnNumeric({ type: 'numeric' })
  price: number

  @Column({ nullable: true })
  orderId?: string

  @ManyToOne(() => Order, parent => parent.orderItems)
  @JoinColumn({ name: 'orderId' })
  order?: Order

  @Column({ nullable: true })
  bookId?: string

  @ManyToOne(() => Book, parent => parent.orderItems)
  @JoinColumn({ name: 'bookId' })
  book?: Book

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
