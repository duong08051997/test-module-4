import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
formEditBook: FormGroup;
book;
id = +this.actRoute.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private actRoute: ActivatedRoute,
              private router: Router,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.formEditBook = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    });
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
      console.log(this.book);
      this.formEditBook.patchValue(this.book);
    });
  }
edit(): any{
    this.bookService.edit(this.formEditBook.value, this.id).subscribe(data => {
      this.router.navigate(['/books']);
    });
}
}
