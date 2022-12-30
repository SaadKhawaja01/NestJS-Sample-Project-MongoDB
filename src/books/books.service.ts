import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateBookDTO, UpdateBookDTO } from './book.dto';
import { Book, BookDocument } from './book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async getBooks(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  async createBooks(book: CreateBookDTO): Promise<Book> {
    const createdBook = new this.bookModel(book);
    return await createdBook.save();
  }

  async getBooksbyid(id: string): Promise<Book> {
    return await this.bookModel.findById(id);
  }

  async updateBookbyid(id: string, name: UpdateBookDTO): Promise<Book> {
    const findbook = await this.bookModel.findByIdAndUpdate(id, name, {
      new: true,
    });
    return findbook;
  }

  async DeleteBookbyid(id: string): Promise<Book> {
  
    const book = await this.bookModel.findByIdAndRemove(id, { new: true });
    return book;
  }
}
