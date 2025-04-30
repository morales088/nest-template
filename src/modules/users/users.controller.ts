import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../auth/dto/auth.dto';
import { Roles } from 'src/common/decorators/role.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Roles('admin','superuser')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get()
  getAll(@Request() req: any){
    console.log(req.user); // 👈 this should include roles
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createUserDto : CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
