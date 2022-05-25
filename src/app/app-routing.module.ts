import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookAddComponent } from "./book-add/book-add.component";
import { BookDeleteComponent } from "./book-delete/book-delete.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookShowComponent } from "./book-show/book-show.component";
import { BookComponent } from "./book/book.component";



const routes: Routes = [
    { path: 'books', component: BookComponent },
    { path: 'book-delete/:id', component: BookDeleteComponent },
    { path: 'book-show/:id', component: BookShowComponent },
    { path: 'book-edit/:id', component: BookEditComponent },
    { path: 'book-add', component: BookAddComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
