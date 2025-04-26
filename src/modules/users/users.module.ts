import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { UsersController } from './users.controller';
import { UserRepository } from './repositories/user.repository';
import { HashService } from 'src/common/utils/hash.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UserRepository, HashService],
  controllers: [UsersController]
})
export class UsersModule {}
