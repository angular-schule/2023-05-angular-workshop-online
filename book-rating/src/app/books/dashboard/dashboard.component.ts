import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}


/*
TODO
- Speicherort der Daten
- Daten
- Anzeige (Kindkomponente?)

*/




/////////////////////

class BookC {
  rating = 5;

  constructor(public isbn: string, public title: string) {}

  rateUp() {
    this.rating++;
  }
}


const myBook = new BookC('123', 'Angular');
myBook.rating = 4;
myBook.rateUp();

////////////////////////////////////////


interface Book {
  isbn: string;
  title: string;
  rating: number;
}

const myBook2: Book = {
  isbn: '213',
  title: 'Angular',
  rating: 5
};

function rateUp(book: Book): Book {
  book.rating++; // TODO!!!!!!!
  return book;
}
