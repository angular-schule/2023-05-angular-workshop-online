import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const ratingMock = {
      rateUp: (b: Book) => b,
      rateDown: (b: Book) => b
    };

    // Ergänzung: Stub für BookStoreService
    const storeMock = {
      getAll: () => of<Book[]>([])
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA], // Shallow Component Test
      providers: [
        // BRS ersetzen: Wenn Service angefordert wird,
        // wird stattdessen ratingMock ausgeliefert.
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    // DOM-Zugriff:
    // const element = fixture.nativeElement.querySelector('h2');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp() for doRateUp()', () => {
    // Arrange
    // BRS anfordern, in Wahrheit ist das aber unser ratingMock
    const rs = TestBed.inject(BookRatingService);
    const testBook = { isbn: '123' } as Book; // Type Assertion
    // spyOn(rs, 'rateUp').and.returnValue(testBook);
    // spyOn(rs, 'rateUp').and.callFake(b => b);

    // rateUp ersetzen. Zur Erzeugung des Werts wird aber trotzdem das
    // originale rateUp aus rs verwendet
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    component.doRateUp(testBook);

    // Assert
    expect(rs.rateUp).toHaveBeenCalledOnceWith(testBook);
  });
});
