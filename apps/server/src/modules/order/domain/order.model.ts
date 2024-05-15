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

import { User } from '../../../modules/user/domain'

import { OrderItem } from '../../../modules/orderItem/domain'

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  totalPrice: number

  @Column({ nullable: true })
  userId?: string

  @ManyToOne(() => User, parent => parent.orders)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => OrderItem, child => child.order)
  orderItems?: OrderItem[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
