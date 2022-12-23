import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDataSource } from './data-source';
import { UserModule } from './user/user.module';
import { AccountsModule } from './accounts/accounts.module';
import { UserService } from './user/user.service';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    UserModule,
    AccountsModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
