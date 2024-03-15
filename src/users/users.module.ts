import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { USER } from './models/models';
import { UserSchema } from './shcema/user.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: USER.name,
      useFactory:()=>{
        return UserSchema;
      }
    }])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
