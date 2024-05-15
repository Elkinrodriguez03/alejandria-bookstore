import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Book } from './book.model'

import { Author } from '../../author/domain'

import { User } from '../../user/domain'

@Injectable()
export class BookDomainFacade {
  constructor(
    @InjectRepository(Book)
    private repository: Repository<Book>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Book>): Promise<Book> {
    return this.repository.save(values)
  }

  async update(item: Book, values: Partial<Book>): Promise<Book> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Book): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Book> = {},
  ): Promise<Book[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Book> = {},
  ): Promise<Book> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByAuthor(
    item: Author,
    queryOptions: RequestHelper.QueryOptions<Book> = {},
  ): Promise<Book[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('author')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        authorId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyBySeller(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Book> = {},
  ): Promise<Book[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('seller')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        sellerId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
