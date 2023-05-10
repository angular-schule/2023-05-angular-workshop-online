import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { RatingComponent } from './rating/rating.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    BookSearchComponent,
    BookCreateComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    RatingComponent,
    ReactiveFormsModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
