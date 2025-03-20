import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PaginatedViewDto } from '../../../../core/dto/base.paginated-view.dto';
import { PATHS } from '../../../../constants';
import { BasicAuthGuard } from '../../guards/basic/basic-auth.guard';
import { CommandBus } from '@nestjs/cqrs';
import { DeleteUserCommand } from '../app/users.use-cases/delete-user.use-case';
import { UsersQueryRepository } from '../infrastructure/query/users.query-repository';
import { GetUsersQueryParams } from './input-dto/get-users.query-params.input-dto';
import { CreateUserInputDto } from './input-dto/users.input-dto';
import {
  GetAllUsersSwagger,
  CreateUserSwagger,
  DeleteUserSwagger,
} from './swagger';
import { UserViewDto } from './view-dto/users.view-dto';
import { AdminCreateUserCommand } from '../app/users.use-cases/admin-create-user.use-case';

@UseGuards(BasicAuthGuard)
@Controller(PATHS.USERS)
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly usersQueryRepository: UsersQueryRepository,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @GetAllUsersSwagger()
  async getAllUsers(
    @Query() query: GetUsersQueryParams,
  ): Promise<PaginatedViewDto<UserViewDto[]>> {
    return this.usersQueryRepository.findAll(query);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @CreateUserSwagger()
  async createUser(
    @Body() createUserDto: CreateUserInputDto,
  ): Promise<UserViewDto> {
    const { userId } = await this.commandBus.execute(
      new AdminCreateUserCommand(createUserDto),
    );

    return await this.usersQueryRepository.findUserById(userId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @DeleteUserSwagger()
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.commandBus.execute(new DeleteUserCommand(id));
  }
}
