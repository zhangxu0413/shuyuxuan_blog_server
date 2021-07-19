/*
 * @Date         : 2021-07-17 18:26:16
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-17 20:47:13
 * @FilePath     : /shuyuxuan_blog_server/src/user/user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }
  findAll() {
    return this.userRepository.find();
  }

}
