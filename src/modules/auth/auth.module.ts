import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/constants/constant';
import { UsersService } from '../users/services/users.service';
import { LocalStrategy } from 'src/common/strategy/local.strategy';
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { UserRepository } from '../users/repositories/user.repository';
import { HashService } from 'src/common/utils/hash.service';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [AuthService, UsersService, LocalStrategy, JwtStrategy,UserRepository, HashService],
  controllers: [AuthController]
})
export class AuthModule {}
