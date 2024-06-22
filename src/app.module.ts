import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [UsersModule, AwsModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
