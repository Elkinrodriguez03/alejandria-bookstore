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

import { Author } from '../../../modules/author/domain'

import { User } from '../../../modules/user/domain'

import { BookCategory } from '../../../modules/bookCategory/domain'

import { CartItem } from '../../../modules/cartItem/domain'

import { OrderItem } from '../../../modules/orderItem/domain'

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  title: string

  @Column({ nullable: true })
  description?: string

  @ColumnNumeric({ type: 'numeric' })
  price: number

  @Column({ nullable: true })
  previewImageUrl?: string

  @Column({ nullable: true })
  authorId?: string

  @ManyToOne(() => Author, parent => parent.books)
  @JoinColumn({ name: 'authorId' })
  author?: Author

  @Column({ nullable: true })
  sellerId?: string

  @ManyToOne(() => User, parent => parent.booksAsSeller)
  @JoinColumn({ name: 'sellerId' })
  seller?: User

  @OneToMany(() => BookCategory, child => child.book)
  bookCategorys?: BookCategory[]

  @OneToMany(() => CartItem, child => child.book)
  cartItems?: CartItem[]

  @OneToMany(() => OrderItem, child => child.book)
  orderItems?: OrderItem[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
