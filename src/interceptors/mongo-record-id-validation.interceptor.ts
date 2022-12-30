import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { Observable } from 'rxjs';

@Injectable()
export class MongoRecordIdValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp();
    const request = http.getRequest();
    const { params } = request;

    if (isValidObjectId(params.id) === false) {
      throw new HttpException(
        'Id is not a valid record id',
        HttpStatus.BAD_REQUEST,
      );
    }
    return next.handle();
  }
}
