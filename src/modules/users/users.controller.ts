import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() body: { username: string; password: string }) {
    return this.usersService.createUser(body);
  }
}
