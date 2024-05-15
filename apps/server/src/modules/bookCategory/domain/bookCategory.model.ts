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

import { Book } from '../../../modules/book/domain'

import { Category } from '../../../modules/category/domain'

@Entity()
export class BookCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  bookId?: string

  @ManyToOne(() => Book, parent => parent.bookCategorys)
  @JoinColumn({ name: 'bookId' })
  book?: Book

  @Column({ nullable: true })
  categoryId?: string

  @ManyToOne(() => Category, parent => parent.bookCategorys)
  @JoinColumn({ name: 'categoryId' })
  category?: Category

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
