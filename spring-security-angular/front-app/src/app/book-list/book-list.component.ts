import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksApiService } from '../books-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  books: Book[] = [];

  constructor(private bookApiService: BooksApiService ) {}

  ngOnInit(): void {
    this.bookApiService.getBooks()
    .subscribe(resultBooks => this.books = resultBooks)
  }

}
