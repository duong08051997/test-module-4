import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
formAddBook: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.formAddBook = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }
add(): any{
    this.bookService.add(this.formAddBook.value).subscribe(data => {
      this.router.navigate(['/books']);
    });
}
}
