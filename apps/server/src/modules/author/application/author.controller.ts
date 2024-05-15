import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Author, AuthorDomainFacade } from '@server/modules/author/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { AuthorApplicationEvent } from './author.application.event'
import { AuthorCreateDto, AuthorUpdateDto } from './author.dto'

@Controller('/v1/authors')
export class AuthorController {
  constructor(
    private eventService: EventService,
    private authorDomainFacade: AuthorDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.authorDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: AuthorCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.authorDomainFacade.create(body)

    await this.eventService.emit<AuthorApplicationEvent.AuthorCreated.Payload>(
      AuthorApplicationEvent.AuthorCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:authorId')
  async findOne(@Param('authorId') authorId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.authorDomainFacade.findOneByIdOrFail(
      authorId,
      queryOptions,
    )

    return item
  }

  @Patch('/:authorId')
  async update(
    @Param('authorId') authorId: string,
    @Body() body: AuthorUpdateDto,
  ) {
    const item = await this.authorDomainFacade.findOneByIdOrFail(authorId)

    const itemUpdated = await this.authorDomainFacade.update(
      item,
      body as Partial<Author>,
    )
    return itemUpdated
  }

  @Delete('/:authorId')
  async delete(@Param('authorId') authorId: string) {
    const item = await this.authorDomainFacade.findOneByIdOrFail(authorId)

    await this.authorDomainFacade.delete(item)

    return item
  }
}
