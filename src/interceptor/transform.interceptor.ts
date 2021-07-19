/*
 * @Date         : 2021-07-15 16:21:44
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-15 16:23:23
 * @FilePath     : /nest-demo1/src/interceptor/transform.interceptor.ts
 */
import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface Response<T> {
  data: T;
}
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map(data => {
        return {
          data,
          code: 0,
          message: '请求成功',
        };
      }),
    );
  }
}

