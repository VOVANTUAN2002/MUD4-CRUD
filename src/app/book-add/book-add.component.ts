import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/book.service';
import { Book } from 'src/books';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
})
export class BookAddComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private bookService: BookService, private Router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      name: new FormControl('', []),
      author: new FormControl('', []),
      description: new FormControl('', []),
    })
  }

  onSubmit() {
    let data = this.bookForm.value;
    let book: Book = {
      name: data.name,
      author: data.author,
      description: data.description,
    }
    this.bookService.store(book).subscribe(() => {
      alert('Thêm danh sách thành công');
      this.bookForm.reset();
      this.Router.navigate(['/books']);
    },
      e => {
        console.log(e);
      })
  }

}
