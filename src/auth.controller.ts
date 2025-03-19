// auth-service/src/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: { name: string; email: string; password: string }) {
    return this.authService.register(userData);
  }

  @Post('login')
  async login(@Body() credentials) {
    return this.authService.login(credentials);
  }
}
