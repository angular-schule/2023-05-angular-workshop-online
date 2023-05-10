import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
    // PULL
    // const isbn = this.route.snapshot.paramMap.get('isbn'); // path: 'books/:isbn'

    // PUSH
    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')!),
      switchMap(isbn => this.bs.getSingle(isbn))
    );
  }
}
