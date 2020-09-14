import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../services/book.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
book;
id = +this.atvRoute.snapshot.paramMap.get('id');
  constructor(private bookService: BookService,
              private atvRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    this.detailBook();
  }
detailBook(): any{
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
      console.log(this.id);
    });
}
}
