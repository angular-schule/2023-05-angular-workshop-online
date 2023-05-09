import { Component, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, ReplaySubject, timer, Subscription, takeWhile, takeUntil, map } from 'rxjs';
import { HistoryComponent } from '../../shared/history/history.component';

@Component({
  templateUrl: './unsubscribe.component.html',
  standalone: true,
  imports: [HistoryComponent]
})
export class UnsubscribeComponent implements OnDestroy {

  logStream$ = new ReplaySubject<string | number>();

  /**
   * Öffne die Browser-Console: Dort siehst Du den Output eines Observables, das jede Sekunde einen Wert generiert.
   * Navigiere zurück auf die Startseite und beobachte die Console:
   * Die Subscription läuft weiter. Wir haben einen klassischen Memory Leak erzeugt ...
   *
   * Sorge dafür, dass die Subscription in der Methode ngOnDestroy() beendet wird!
   * Sie wird beim Buttonklick und beim Wegnavigieren ausgelöst.
   *
   * Es gibt noch weitere Wege, das Problem zu lösen ...
   */

  // private destroy$ = new Subject<void>();

  constructor() {
    const interval$ = timer(0, 1000);

    interval$.pipe(
      map(e => e * 10),
      // takeUntil(this.destroy$),
      takeUntilDestroyed()
    ).subscribe({
      next: e => this.log(e),
      error: err => this.log('❌ ERROR: ' + err),
      complete: () => this.log('✅ COMPLETE')
    })
  }

  ngOnDestroy() {
    // this.destroy$.next();
  }

  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }
}
