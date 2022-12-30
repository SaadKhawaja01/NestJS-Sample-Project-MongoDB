import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MongoRecordIdValidationInterceptor } from 'src/interceptors/mongo-record-id-validation.interceptor';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  createUsers(@Body() data: CreateUserDTO) {
    return this.usersService.createUsers(data);
  }
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  @UseInterceptors(MongoRecordIdValidationInterceptor) //to validate id
  getUsersbyid(@Param('id') id: string) {
    return this.usersService.getUsersbyid(id);
  }

  @Patch(':id')
  @UseInterceptors(MongoRecordIdValidationInterceptor) //to validate id
  updateUser(@Param('id') id: string, @Body() update: UpdateUserDTO) {
    return this.usersService.updateUserbyid(id, update);
  }

  @Delete(':id')
  @UseInterceptors(MongoRecordIdValidationInterceptor) //to validate id
  DeleteUserbyid(@Param('id') id: string) {
    return this.usersService.DeleteUserbyid(id);
  }
}
