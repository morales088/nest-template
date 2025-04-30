import { Controller, UseGuards, Post, Request, Get, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private jwtService: JwtService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        const payload = { username: req.user.username, sub: req.user.id, roles: req.user.roles };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    
}
