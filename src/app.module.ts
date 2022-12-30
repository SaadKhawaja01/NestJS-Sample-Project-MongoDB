import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://SaadKhawajaProject:3GnB0DPF6y7NHxRp@sk1.f4p6k.mongodb.net/?retryWrites=true&w=majority',
    ),
    BooksModule,
    UserModule,
  ],
})
export class AppModule {}
