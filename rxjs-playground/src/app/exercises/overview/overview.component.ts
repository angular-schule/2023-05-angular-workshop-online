import { Component } from '@angular/core';

import { ExerciseEntry, exercisesList } from '../exercises';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'rxw-overview',
    templateUrl: './overview.component.html',
    standalone: true,
    imports: [NgFor, RouterLink, NgIf, DatePipe]
})
export class OverviewComponent {
  exercises: ExerciseEntry[] = exercisesList;
  generationDate = 1683402689859;
}
