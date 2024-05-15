import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Book } from './book.model'

export class BookApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Book>,
  ): Promise<Book[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/books${buildOptions}`)
  }

  static findOne(
    bookId: string,
    queryOptions?: ApiHelper.QueryOptions<Book>,
  ): Promise<Book> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/books/${bookId}${buildOptions}`)
  }

  static createOne(values: Partial<Book>): Promise<Book> {
    return HttpService.api.post(`/v1/books`, values)
  }

  static updateOne(bookId: string, values: Partial<Book>): Promise<Book> {
    return HttpService.api.patch(`/v1/books/${bookId}`, values)
  }

  static deleteOne(bookId: string): Promise<void> {
    return HttpService.api.delete(`/v1/books/${bookId}`)
  }

  static findManyByAuthorId(
    authorId: string,
    queryOptions?: ApiHelper.QueryOptions<Book>,
  ): Promise<Book[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/authors/author/${authorId}/books${buildOptions}`,
    )
  }

  static createOneByAuthorId(
    authorId: string,
    values: Partial<Book>,
  ): Promise<Book> {
    return HttpService.api.post(`/v1/authors/author/${authorId}/books`, values)
  }

  static findManyBySellerId(
    sellerId: string,
    queryOptions?: ApiHelper.QueryOptions<Book>,
  ): Promise<Book[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/seller/${sellerId}/books${buildOptions}`,
    )
  }

  static createOneBySellerId(
    sellerId: string,
    values: Partial<Book>,
  ): Promise<Book> {
    return HttpService.api.post(`/v1/users/seller/${sellerId}/books`, values)
  }
}
