import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log('Received registration request:', createUserDto);
    return this.authService.registerUser(createUserDto);
  }

  @Post('signin')
  login(){}
  
}

