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

import { Cart } from '../../../modules/cart/domain'

import { Book } from '../../../modules/book/domain'

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  quantity: number

  @Column({ nullable: true })
  cartId?: string

  @ManyToOne(() => Cart, parent => parent.cartItems)
  @JoinColumn({ name: 'cartId' })
  cart?: Cart

  @Column({ nullable: true })
  bookId?: string

  @ManyToOne(() => Book, parent => parent.cartItems)
  @JoinColumn({ name: 'bookId' })
  book?: Book

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
