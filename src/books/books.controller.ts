import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MongoRecordIdValidationInterceptor } from 'src/interceptors/mongo-record-id-validation.interceptor';
import { CreateBookDTO, UpdateBookDTO } from './book.dto';
import { BooksService } from './books.service';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  createBooks(@Body() data: CreateBookDTO) {
    return this.booksService.createBooks(data);
  }
  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  @UseInterceptors(MongoRecordIdValidationInterceptor)
  getBooksbyid(@Param('id') id: string) {
    console.log('Action Called');
    return this.booksService.getBooksbyid(id);
  }

  @Patch(':id')
  @UseInterceptors(MongoRecordIdValidationInterceptor)
  updateBook(@Param('id') id: string, @Body() update: UpdateBookDTO) {
    return this.booksService.updateBookbyid(id, update);
  }

  @Delete(':id')
  @UseInterceptors(MongoRecordIdValidationInterceptor) //to validate id
  DeleteBookbyid(@Param('id') id: string) {
    return this.booksService.DeleteBookbyid(id);
  }
}
