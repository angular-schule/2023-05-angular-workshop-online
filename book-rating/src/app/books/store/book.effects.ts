import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of, timer } from 'rxjs';
import * as BookActions from './book.actions';
import { BookStoreService } from '../shared/book-store.service';


@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks),
      mergeMap(() => this.bs.getAll().pipe(
        map(books => BookActions.loadBooksSuccess({ data: books })),
        catchError(err => of(BookActions.loadBooksFailure({ error: err.message })))
      ))
    )
  })

  constructor(private actions$: Actions, private bs: BookStoreService) {}
}
