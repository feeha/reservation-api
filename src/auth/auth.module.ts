import { Module } from '@nestjs/common';
import { jwtConstant } from './constant';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './../entities/modules/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: jwtConstant.secret,
            signOptions: { expiresIn: '60s' },
        }),
        UsersModule,
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule { }