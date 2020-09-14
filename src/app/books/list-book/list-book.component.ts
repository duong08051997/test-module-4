import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../services/book.service';
import {IBook} from '../../../interface/ibook';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
books: IBook[] = []  ;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): any{
    this.bookService.getAll().subscribe(data => {
      this.books = data;
      console.log(this.books);
    });
  }
  delete(id): any{
    this.bookService.delete(id).subscribe(data => {
      this.getAll();
    });
  }

}
