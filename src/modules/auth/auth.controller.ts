import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private jwtService: JwtService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        const payload = { username: req.user.username, sub: req.user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/user')
    getProfile(@Request() req) {
      return req.user;
    }
    
}
