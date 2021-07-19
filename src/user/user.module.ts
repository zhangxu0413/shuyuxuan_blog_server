/*
 * @Date         : 2021-07-17 18:26:13
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-17 20:08:27
 * @FilePath     : /shuyuxuan_blog_server/src/user/user.module.ts
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
