import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Author } from './author.model'

export class AuthorApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Author>,
  ): Promise<Author[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/authors${buildOptions}`)
  }

  static findOne(
    authorId: string,
    queryOptions?: ApiHelper.QueryOptions<Author>,
  ): Promise<Author> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/authors/${authorId}${buildOptions}`)
  }

  static createOne(values: Partial<Author>): Promise<Author> {
    return HttpService.api.post(`/v1/authors`, values)
  }

  static updateOne(authorId: string, values: Partial<Author>): Promise<Author> {
    return HttpService.api.patch(`/v1/authors/${authorId}`, values)
  }

  static deleteOne(authorId: string): Promise<void> {
    return HttpService.api.delete(`/v1/authors/${authorId}`)
  }
}
