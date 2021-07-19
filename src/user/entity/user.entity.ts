/*
 * @Date         : 2021-07-17 19:13:28
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-17 20:02:48
 * @FilePath     : /shuyuxuan_blog_server/src/user/entity/user.entity.ts
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('blog_user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('datetime')
  created_time: string;

  @Column('datetime')
  updated_time: string;

  @Column('int')
  deleted: number;
}