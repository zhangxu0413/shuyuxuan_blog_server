/*
 * @Date         : 2021-07-17 18:26:19
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-17 20:47:57
 * @FilePath     : /shuyuxuan_blog_server/src/user/user.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userSevice: UserService) { }
  @Get('getUserList')
  async userList() {
    return await this.userSevice.findAll()
  }
}
