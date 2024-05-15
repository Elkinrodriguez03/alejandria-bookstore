import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { BookDomainModule } from '../domain'
import { BookController } from './book.controller'

import { AuthorDomainModule } from '../../../modules/author/domain'

import { BookByAuthorController } from './bookByAuthor.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { BookByUserController } from './bookByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BookDomainModule,

    AuthorDomainModule,

    UserDomainModule,
  ],
  controllers: [BookController, BookByAuthorController, BookByUserController],
  providers: [],
})
export class BookApplicationModule {}
