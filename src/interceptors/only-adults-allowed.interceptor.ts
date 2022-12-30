import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class OnlyAdultsAllowedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const { user } = context.switchToHttp().getRequest();
    if (user.age <= 17) {
      throw new HttpException(
        'You are not allowed to access this page',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return next.handle();
  }
}
