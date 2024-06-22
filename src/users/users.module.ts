import { Module } from '@nestjs/common';
import { AwsModule } from 'src/aws/aws.module';
import { UsersController } from './users.controller';

@Module({
  imports: [AwsModule],
  controllers: [UsersController],
})
export class UsersModule {}
