import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
