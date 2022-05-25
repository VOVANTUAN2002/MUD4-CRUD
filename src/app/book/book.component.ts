import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private Router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSubmit() {
    let data = this.bookForm.value;
    let book: Book = {
      name: data.name,
      author: data.author,
      description: data.description,
    }
  }
  
}
