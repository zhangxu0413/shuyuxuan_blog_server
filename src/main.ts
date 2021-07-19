/*
 * @Date         : 2021-05-25 10:06:36
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-17 19:20:19
 * @FilePath     : /shuyuxuan_blog_server/src/main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局注册错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
