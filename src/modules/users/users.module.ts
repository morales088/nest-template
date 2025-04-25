import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { UsersController } from './users.controller';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UserRepository],
  controllers: [UsersController]
})
export class UsersModule {}
