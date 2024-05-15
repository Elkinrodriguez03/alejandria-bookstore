import { Book } from '../book'

export class Author {
  id: string

  name: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  books?: Book[]
}
