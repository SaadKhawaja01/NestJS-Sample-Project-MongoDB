import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateUserDTO } from './user.dto';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements CreateUserDTO {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  age: number;
  @Prop({ required: true })
  Department: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
