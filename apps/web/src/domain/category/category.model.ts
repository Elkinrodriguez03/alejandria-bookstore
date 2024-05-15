import { BookCategory } from '../bookCategory'

export class Category {
  id: string

  name: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  bookCategorys?: BookCategory[]
}
