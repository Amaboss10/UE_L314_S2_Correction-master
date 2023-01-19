import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.model';

@Module({
  imports: [
    //ConfigModule.forRoot(),
    /*TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
    }),*/
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://admin:MongoDB@cluster0.lptyb.mongodb.net/nestjsPassport?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
