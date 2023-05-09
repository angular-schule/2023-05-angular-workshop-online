import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime } from 'rxjs';

interface ResizeEvent {
  currentTarget: Window;
}

@Component({
  templateUrl: './fromevent.component.html',
  standalone: true
})
export class FromeventComponent {

  currentWidth?: number;

  constructor() {
    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent<ResizeEvent>(window, 'resize').pipe(
      debounceTime(500),
      map(e => e.currentTarget.innerWidth),
      startWith(window.innerWidth),
    ).subscribe(e => {
      this.currentWidth = e;
    });

    /******************************/
  }

}
