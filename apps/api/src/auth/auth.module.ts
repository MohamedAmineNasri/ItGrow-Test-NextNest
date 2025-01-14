import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { localStrategy } from './strategies/local.strategy';


@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService,localStrategy],
})
export class AuthModule {}
