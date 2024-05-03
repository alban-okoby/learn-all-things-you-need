import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('signup')
    signUp(@Body() dto: AuthDTO) {
        return this.authService.signUp(dto);
    }

    @Post('signin')
    signIn() {
        // return this.authService.signIn();
    }

}
