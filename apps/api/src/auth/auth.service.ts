import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { verify } from 'argon2';
import { AuthJwtPayload } from './types/auth.jwtPayload';
import { JwtService } from '@nestjs/jwt';
import refreshConfig from './config/refresh.config';
import { ConfigType } from '@nestjs/config';
import { CreatePostDto } from 'src/user/dto/create-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(refreshConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshConfig>,
    private readonly prisma: PrismaService,
  ) {}

  async registerUser(createUserDto: CreateUserDto) {
    const user = await this.userService.findByEmail(createUserDto.email);
    if (user) throw new ConflictException('User already exists!');
    return this.userService.create(createUserDto);
  }

  async validateLocalUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('This User Does Not Exist!');
    const isPasswordMatched = verify(user.password, password);
    if (!isPasswordMatched)
      throw new UnauthorizedException('Invalid Credentials!');
    return { id: user.id, name: user.name };
  }

  async login(userId: number, name?: string) {
    const { accessToken, refreshToken } = await this.generateTokens(
      userId,
      name,
    );
    return {
      id: userId,
      name: name,
      accessToken,
      refreshToken,
    };
  }

  async generateTokens(userId: number, name: string) {
    const payload: AuthJwtPayload = { sub: userId, name }; 
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig),
    ]);

    return { accessToken, refreshToken };
  }

  async validateJwtUser(userId: number) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new UnauthorizedException('User not found !');
    const currentUser = { id: user.id };
    return currentUser;
  }

  async validateRefreshToken(userId: number) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new UnauthorizedException('User not found !');
    const currentUser = { id: user.id };
    return currentUser;
  }

  async refreshToken(userId: number, name: string) {
    const { accessToken, refreshToken } = await this.generateTokens(
      userId,
      name,
    );
    return {
      id: userId,
      name: name,
      accessToken,
      refreshToken,
    };
  }

  async validateGoogleUser(googleUser: CreateUserDto) {
    const user = await this.userService.findByEmail(googleUser.email);
    if (user) return user;
    return await this.userService.create(googleUser);
  }
  async createPost(createPostDto: CreatePostDto) {
    const { title, catSlug, desc, img, userEmail } = createPostDto;

    // Generate the slug
    const slug = title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, ''); // Generate slug safely

    const post = await this.prisma.post.create({
      data: {
        title,
        desc,
        catSlug,
        userEmail,
        img, // Store image name in the database
        slug, // Add the generated slug here
        views: 0,
      },
    });

    return post;
  }

  async getAllPosts() {
    const posts = await this.prisma.post.findMany({
      orderBy: {
        createdAt: 'desc', // Retrieve posts in descending order of creation
      },
      select: {
        id: true,
        title: true,
        desc: true,
        catSlug: true,
        userEmail: true,
        img: true,
        slug: true,
        views: true,
        createdAt: true, 
      },
    });

    return posts;
  }



   
   async createWork(createWorkDto: { userEmail: string; images: string[] }) {
    const { userEmail, images } = createWorkDto;

    const work = await this.prisma.work.create({
      data: {
        images,
      },
    });

    return work;
  }

  async getWorkImages() {
    const workImages = await this.prisma.work.findMany({
      select: {
        id: true,
        images: true,
      },
    });
  
    // Map image filenames to their relative paths in 'public/Work'
    const workImagesWithPaths = workImages.map(workImage => ({
      ...workImage,
      images: workImage.images.map(image => {
        // Return the relative URL of the image
        return `/Work/${image}`;  // Static files served from the 'public/Work' folder in Next.js
      }).filter(Boolean), // Remove null values if any images are missing
    }));
  
    return workImagesWithPaths;
  }
  

}
