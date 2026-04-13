import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { Book } from './books/entities/book.entity';
import { User } from './users/entities/user.entity';

@Module({
imports: [
 ConfigModule.forRoot({ isGlobal: true }),
 TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
          type: 'oracle',
          host: config.get('DB_HOST'),
          port: parseInt(config.get('DB_PORT')!),
          username:config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          serviceName: config.get('DB_SERVICE_NAME'),
          synchronize: config.get('DB_SYNCHRONIZE') === 'true',
          entities: [Book, User],
          logging: true,
}),
}),
BooksModule,

UsersModule,
],
})
export class AppModule {}