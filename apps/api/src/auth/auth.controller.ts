import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log('Received registration request:', createUserDto);
    return this.authService.registerUser(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  login(@Request() req) {
    return req.user
  }
}
