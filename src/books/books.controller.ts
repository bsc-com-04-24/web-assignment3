import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';      //importing books ssrvice

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
     getAllBooks() {
        return this.booksService.getAllBooks();     //returns all books
    }

    @Get('/author/:author')
    getBooksByAuthor(@Param('author') author : string) {
        return this.booksService.getBookByAuthor(author);
    }  

    @Get('/id/:id')
    getBooksById(@Param('id') id : string) {
        return this.booksService.getBooksById(Number(id));     //Number(id) converts the id from string to number because our books have id as number
    }
}

