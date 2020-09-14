import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './books/list-book/list-book.component';
import {AddBookComponent} from './books/add-book/add-book.component';
import {EditBookComponent} from './books/edit-book/edit-book.component';
import {DetailBookComponent} from './books/detail-book/detail-book.component';

const routes: Routes = [
  {
    path: 'books',
    children: [
      {
        path: '',
        component: ListBookComponent
      },
      {
        path: 'add',
        component: AddBookComponent
      },
      {
        path: 'edit/:id',
        component: EditBookComponent
      },
      {
        path: ':id',
        component: DetailBookComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
