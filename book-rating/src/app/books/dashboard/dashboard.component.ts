import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = [];
  // books2!: Book[]; // Non-Null Assertion – nicht verwenden!!

  constructor(private rs: BookRatingService, private bs: BookStoreService) {
    this.bs.getAll().subscribe(books => {
      this.books = books;
    });
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    // altes Buch entfernen, neues am Ende einfügen
    // this.books = [...this.books.filter(b => b.isbn !== ratedBook.isbn), ratedBook];

    // neues Array erzeugen und dabei das alte Buch ersetzen
    this.books = this.books.map(b => {
      if (b.isbn === ratedBook.isbn) {
        return ratedBook;
      } else {
        return b;
      }
    });

    // [1,2,3,4,5,6,7,8].filter(e => e > 5) // [6,7,8]
    // [1,2,3,4,5,6,7,8].map(e => e * 10) // [10, 20, 30, 40, 50, 60, 70, 80, 90]
  }
}

