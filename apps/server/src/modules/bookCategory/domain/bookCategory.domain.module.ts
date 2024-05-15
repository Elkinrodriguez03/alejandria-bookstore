import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BookCategoryDomainFacade } from './bookCategory.domain.facade'
import { BookCategory } from './bookCategory.model'

@Module({
  imports: [TypeOrmModule.forFeature([BookCategory]), DatabaseHelperModule],
  providers: [BookCategoryDomainFacade, BookCategoryDomainFacade],
  exports: [BookCategoryDomainFacade],
})
export class BookCategoryDomainModule {}
