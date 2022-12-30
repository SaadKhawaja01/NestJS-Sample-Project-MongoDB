import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateBookDTO } from './book.dto';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book implements CreateBookDTO {
  @Prop({ undefined: true })
  name: string;
  @Prop({ undefined: true })
  quantity: number;
  @Prop({ undefined: true })
  Author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
