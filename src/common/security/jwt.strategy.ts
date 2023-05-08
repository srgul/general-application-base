import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'jKpB$*EJwP#98Qy^!F!KvYhX9c%eBZ7x\n',
        });
    }

    async validate(payload: any) {
        const user = await this.authService.validateUserById(payload.sub);
        if (!user) {
            throw new Error('Unauthorized');
        }
        return user;
    }
}
