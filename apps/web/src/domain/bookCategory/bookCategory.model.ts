import { Book } from '../book'

import { Category } from '../category'

export class BookCategory {
  id: string

  bookId?: string

  book?: Book

  categoryId?: string

  category?: Category

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
