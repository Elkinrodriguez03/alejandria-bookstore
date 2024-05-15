import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { BookCategoryDomainModule } from '../domain'
import { BookCategoryController } from './bookCategory.controller'

import { BookDomainModule } from '../../../modules/book/domain'

import { BookCategoryByBookController } from './bookCategoryByBook.controller'

import { CategoryDomainModule } from '../../../modules/category/domain'

import { BookCategoryByCategoryController } from './bookCategoryByCategory.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BookCategoryDomainModule,

    BookDomainModule,

    CategoryDomainModule,
  ],
  controllers: [
    BookCategoryController,

    BookCategoryByBookController,

    BookCategoryByCategoryController,
  ],
  providers: [],
})
export class BookCategoryApplicationModule {}
