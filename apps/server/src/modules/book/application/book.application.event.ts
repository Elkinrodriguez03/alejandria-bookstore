export namespace BookApplicationEvent {
  export namespace BookCreated {
    export const key = 'book.application.book.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
