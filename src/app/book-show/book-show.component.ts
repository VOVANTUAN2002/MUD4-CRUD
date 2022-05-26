import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/book.service';
import { Book } from 'src/books';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
})
export class BookShowComponent implements OnInit {
  id: any = 0;
  book !: Book;
  constructor(private bookService: BookService, private Router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this.bookService.find(id).subscribe((book) => {
        this.book = book;
      })
    })
  }

}
