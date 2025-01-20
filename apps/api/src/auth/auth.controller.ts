import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { GoogleAuthGuard } from './guards/google-auth/google-auth.guard';
import { Response } from 'express';
import { CreatePostDto } from 'src/user/dto/create-post.dto';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'fs';

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
    return this.authService.login(req.user.id, req.user.name);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getAll(@Request() req) {
    return {
      message: `Welcome, ${req.user.name}. This is your user ID: ${req.user.id}`,
    };
  }

  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user.id, req.user.name);
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallback(@Request() req, @Res() res: Response) {
    console.log('Google User', req.user);
    const response = await this.authService.login(req.user.id, req.user.name);
    res.redirect(
      `http://localhost:3000/auth/google/callback?userId=${response.id}&name=${response.name}&accessToken=${response.accessToken}&refreshToken=${response.refreshToken}`,
    );
  }
  @Post('create-post')
  @UseInterceptors(
    FileInterceptor('img', {
      limits: { fileSize: 50 * 1024 * 1024 }, // Set file size limit (50MB)
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = path.join(
            __dirname,
            '..',
            '..',
            '..',
            'web',
            'public',
          );
          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async createPost(
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { title, catSlug, desc, userEmail } = createPostDto;

    if (!title || !catSlug || !desc || !userEmail) {
      throw new Error('Missing required fields.');
    }

    if (!file) {
      throw new Error('Missing file upload.');
    }

    const imageName = file ? file.filename : null;
    console.log('Uploaded image filename:', imageName);

    const post = await this.authService.createPost({
      title,
      catSlug,
      desc,
      userEmail,
      img: imageName, // Ensure image name is stored in DB
    });

    return { message: 'Post created successfully', post };
  }

  @Get('get-all-posts')
  async getAllPosts() {
    const posts = await this.authService.getAllPosts();
    return { message: 'Posts retrieved successfully', posts };
  }
}
