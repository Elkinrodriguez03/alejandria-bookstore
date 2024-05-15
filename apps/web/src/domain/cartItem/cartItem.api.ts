import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { CartItem } from './cartItem.model'

export class CartItemApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<CartItem>,
  ): Promise<CartItem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/cartItems${buildOptions}`)
  }

  static findOne(
    cartItemId: string,
    queryOptions?: ApiHelper.QueryOptions<CartItem>,
  ): Promise<CartItem> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/cartItems/${cartItemId}${buildOptions}`)
  }

  static createOne(values: Partial<CartItem>): Promise<CartItem> {
    return HttpService.api.post(`/v1/cartItems`, values)
  }

  static updateOne(
    cartItemId: string,
    values: Partial<CartItem>,
  ): Promise<CartItem> {
    return HttpService.api.patch(`/v1/cartItems/${cartItemId}`, values)
  }

  static deleteOne(cartItemId: string): Promise<void> {
    return HttpService.api.delete(`/v1/cartItems/${cartItemId}`)
  }

  static findManyByCartId(
    cartId: string,
    queryOptions?: ApiHelper.QueryOptions<CartItem>,
  ): Promise<CartItem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/carts/cart/${cartId}/cartItems${buildOptions}`,
    )
  }

  static createOneByCartId(
    cartId: string,
    values: Partial<CartItem>,
  ): Promise<CartItem> {
    return HttpService.api.post(`/v1/carts/cart/${cartId}/cartItems`, values)
  }

  static findManyByBookId(
    bookId: string,
    queryOptions?: ApiHelper.QueryOptions<CartItem>,
  ): Promise<CartItem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/books/book/${bookId}/cartItems${buildOptions}`,
    )
  }

  static createOneByBookId(
    bookId: string,
    values: Partial<CartItem>,
  ): Promise<CartItem> {
    return HttpService.api.post(`/v1/books/book/${bookId}/cartItems`, values)
  }
}
