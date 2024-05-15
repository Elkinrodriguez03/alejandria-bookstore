import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { AuthorDomainFacade } from './author.domain.facade'
import { Author } from './author.model'

@Module({
  imports: [TypeOrmModule.forFeature([Author]), DatabaseHelperModule],
  providers: [AuthorDomainFacade, AuthorDomainFacade],
  exports: [AuthorDomainFacade],
})
export class AuthorDomainModule {}
