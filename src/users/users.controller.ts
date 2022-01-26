import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { UserCreateDto } from './dtos/user.create.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  list() {
    return this.usersService.list();
  }

  @Get(':id')
  async view(@Param('id') id: number) {
    const user = await this.usersService.findById(id);
    if (user) {
      return user;
    }

    throw new NotFoundException('User not found');
  }

  @Post()
  create(@Body() createUserDto: UserCreateDto) {
    return this.usersService.create(createUserDto);
  }
}
