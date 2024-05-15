export namespace BookCategoryApplicationEvent {
  export namespace BookCategoryCreated {
    export const key = 'bookCategory.application.bookCategory.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
