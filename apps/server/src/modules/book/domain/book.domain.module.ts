import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BookDomainFacade } from './book.domain.facade'
import { Book } from './book.model'

@Module({
  imports: [TypeOrmModule.forFeature([Book]), DatabaseHelperModule],
  providers: [BookDomainFacade, BookDomainFacade],
  exports: [BookDomainFacade],
})
export class BookDomainModule {}
