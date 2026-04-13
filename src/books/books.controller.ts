import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'; 
import { BooksService } from './books.service'; 
import { CreateBookDto } from './dto/create-book.dto'; 
import { UpdateBookDto } from './dto/update-book.dto'; 
 
@Controller('books') 
export class BooksController { 
  constructor(private readonly booksService: BooksService) {} 
 
        // POST /books — create a new book 
        @Post() 
        create(@Body() createBookDto: CreateBookDto) { 
        return this.booksService.create(createBookDto); 
        }

          // GET /books — get all books 
        @Get() 
        findAll() { 
        return this.booksService.findAll(); 
        } 
 
        // GET /books/:id — get one book 
        @Get(':id') 
        findOne(@Param('id') id: string) { 
        return this.booksService.findOne(+id); 
        } 
 
        // PATCH /books/:id — update a book 
        @Patch(':id') 
        update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) { 
        return this.booksService.update(+id, updateBookDto); 
        } 
 
        // DELETE /books/:id — delete a book 
        @Delete(':id') 
        remove(@Param('id') id: string) { 
        return this.booksService.remove(+id); 
  } 
}






/*@Controller('books')
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
}*/

