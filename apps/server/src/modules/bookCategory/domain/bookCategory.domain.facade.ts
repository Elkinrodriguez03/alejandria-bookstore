import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { BookCategory } from './bookCategory.model'

import { Book } from '../../book/domain'

import { Category } from '../../category/domain'

@Injectable()
export class BookCategoryDomainFacade {
  constructor(
    @InjectRepository(BookCategory)
    private repository: Repository<BookCategory>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<BookCategory>): Promise<BookCategory> {
    return this.repository.save(values)
  }

  async update(
    item: BookCategory,
    values: Partial<BookCategory>,
  ): Promise<BookCategory> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: BookCategory): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<BookCategory> = {},
  ): Promise<BookCategory[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<BookCategory> = {},
  ): Promise<BookCategory> {
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

  async findManyByBook(
    item: Book,
    queryOptions: RequestHelper.QueryOptions<BookCategory> = {},
  ): Promise<BookCategory[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('book')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        bookId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByCategory(
    item: Category,
    queryOptions: RequestHelper.QueryOptions<BookCategory> = {},
  ): Promise<BookCategory[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('category')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        categoryId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
