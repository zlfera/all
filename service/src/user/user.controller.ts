import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/list')
  root(): string {
    console.log(123);
    return this.userService.root();
  }
  @Post('/user')
  create(@Body() body: CreateUserDto) {
    this.userService.create(body);
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Patch('/users/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    console.log(123);

    return this.userService.update(id, updateUserDto);
  }
}
