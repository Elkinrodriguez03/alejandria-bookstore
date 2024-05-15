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

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @OneToMany(() => Book, child => child.author)
  books?: Book[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
