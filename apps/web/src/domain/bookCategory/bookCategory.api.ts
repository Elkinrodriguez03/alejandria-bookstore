import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { BookCategory } from './bookCategory.model'

export class BookCategoryApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<BookCategory>,
  ): Promise<BookCategory[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/bookCategorys${buildOptions}`)
  }

  static findOne(
    bookCategoryId: string,
    queryOptions?: ApiHelper.QueryOptions<BookCategory>,
  ): Promise<BookCategory> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/bookCategorys/${bookCategoryId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<BookCategory>): Promise<BookCategory> {
    return HttpService.api.post(`/v1/bookCategorys`, values)
  }

  static updateOne(
    bookCategoryId: string,
    values: Partial<BookCategory>,
  ): Promise<BookCategory> {
    return HttpService.api.patch(`/v1/bookCategorys/${bookCategoryId}`, values)
  }

  static deleteOne(bookCategoryId: string): Promise<void> {
    return HttpService.api.delete(`/v1/bookCategorys/${bookCategoryId}`)
  }

  static findManyByBookId(
    bookId: string,
    queryOptions?: ApiHelper.QueryOptions<BookCategory>,
  ): Promise<BookCategory[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/books/book/${bookId}/bookCategorys${buildOptions}`,
    )
  }

  static createOneByBookId(
    bookId: string,
    values: Partial<BookCategory>,
  ): Promise<BookCategory> {
    return HttpService.api.post(
      `/v1/books/book/${bookId}/bookCategorys`,
      values,
    )
  }

  static findManyByCategoryId(
    categoryId: string,
    queryOptions?: ApiHelper.QueryOptions<BookCategory>,
  ): Promise<BookCategory[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/categorys/category/${categoryId}/bookCategorys${buildOptions}`,
    )
  }

  static createOneByCategoryId(
    categoryId: string,
    values: Partial<BookCategory>,
  ): Promise<BookCategory> {
    return HttpService.api.post(
      `/v1/categorys/category/${categoryId}/bookCategorys`,
      values,
    )
  }
}
