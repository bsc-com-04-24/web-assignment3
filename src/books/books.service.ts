import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';

@Injectable()
export class BooksService {

    private books = [
        {id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937},
        {id: 2, title: '1984', author: 'George Orwell', year: 1949},
        {id: 3, title: 'Harry Potter', author: 'J.K. Rowling', year: 1997},
        {id: 4, title: 'The Alchemist', author: 'Paulo Coelho', year: 1988},
    ];

    getAllBooks(){
        return this.books;
    }

    getBooksById(id: number){
        const book = this.books.find(book => book.id === id);     //search for a book with the given id and return it, if not found return undefined
        return book || {message: 'Book not found'};     //if book is found return it, otherwise return a message saying book not found
    }

    getBookByAuthor(author: string){
        const book = this.books.filter(book => book.author.toLowerCase() === author.toLowerCase());     //filter checks all books and returns multiple results toLower.case()  makes comparison case insensitive
        return book.length > 0 ? book : {message: 'No books found for this author'};     //book.length > 0 returns books   book.length means if true return books otherwise return message saying no books found for this author 

    } 



}





