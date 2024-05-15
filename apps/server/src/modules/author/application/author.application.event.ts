export namespace AuthorApplicationEvent {
  export namespace AuthorCreated {
    export const key = 'author.application.author.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
