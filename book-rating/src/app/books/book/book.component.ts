import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  // hier dürfen Daten von der Elternkomponente hineinfließen
  @Input() book?: Book;
}
