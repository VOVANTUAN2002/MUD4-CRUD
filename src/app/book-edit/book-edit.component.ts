import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/book.service';
import { Book } from 'src/books';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
})
export class BookEditComponent implements OnInit {
  bookForm!: FormGroup;
  id: any = 0;
  constructor(private bookService: BookService, private Router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      let book = this.bookService.find(id).subscribe(book => {
        this.bookForm = new FormGroup({
          name: new FormControl(book.name, [Validators.required]),
          author: new FormControl(book.author, [Validators.required]),
          description: new FormControl(book.description, [Validators.required])

        });
      });
    });
  }
  onSubmit() {
    let data = this.bookForm.value;
    let book: Book = {
      name: data.name,
      author: data.author,
      description: data.description,
    }
    this.bookService.update(this.id, book).subscribe(() => {
      alert('Sửa sách thành công');
      this.bookForm.reset();
      this.Router.navigate(['/books']);
    },
      e => {
        console.log(e);
      })
  }

}
