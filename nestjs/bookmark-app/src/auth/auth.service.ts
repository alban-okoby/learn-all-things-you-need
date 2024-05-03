import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './auth.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    
   async signIn(dto: AuthDTO) {
        const hash = await argon.hash(dto.password);
        const savedUser = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            }
        })
        return savedUser;
    }
    async signUp(dto: AuthDTO) {
        const hash = await argon.hash(dto.password);
        const savedUser = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            }
        });
        delete savedUser.hash;
        return savedUser;    }
}
