import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {
  searchControl = new FormControl('', { nonNullable: true });

  books$ = this.searchControl.valueChanges.pipe(
    filter(term => term.length >= 3),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => this.bs.search(term))
  );

  constructor(private bs: BookStoreService) {

  }
}
