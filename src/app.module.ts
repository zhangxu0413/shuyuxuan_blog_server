import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '118.25.228.199',
    port: 3306,
    name: 'shuyuxuan_test',
    username: 'zhangshuyu',
    password: '654321',
    database: 'shuyuxuan_test',
    entities: [],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
