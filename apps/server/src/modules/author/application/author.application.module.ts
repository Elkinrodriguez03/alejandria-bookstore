import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AuthorDomainModule } from '../domain'
import { AuthorController } from './author.controller'

@Module({
  imports: [AuthenticationDomainModule, AuthorDomainModule],
  controllers: [AuthorController],
  providers: [],
})
export class AuthorApplicationModule {}
