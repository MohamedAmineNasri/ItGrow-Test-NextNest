import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { localStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports:[JwtModule.registerAsync(jwtConfig.asProvider()),ConfigModule.forFeature(jwtConfig)],
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService,localStrategy,JwtStrategy],
})
export class AuthModule {}
