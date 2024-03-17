import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';


@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', 
      port: 5432, 
      username: 'postgres', 
      password: '12345', 
      database: 'ecommerce', 
      entities: [User], 
      synchronize: true, 
    }),
    UsersModule,
  ], controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
