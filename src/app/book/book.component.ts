import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/book.service';
import { Book } from 'src/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  count: number = 0;
  bookForm: any;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
      this.count = this.books.length;
    })
  }
  check() {
    const controls = this.bookForm.controls;
    const invalidArr = [];
    const validArr = [];
    for (const count in controls) {
      if (controls[count].status === 'INVALID') {
        invalidArr.push(count);
      } else {
        validArr.push(count);
      }
    }
    console.log(`valid count : ${validArr.length}`)
    console.log(`invalid count : ${invalidArr.length}`)
  }

}
