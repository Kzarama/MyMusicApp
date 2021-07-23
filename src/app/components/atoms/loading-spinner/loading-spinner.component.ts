import { Component } from '@angular/core';

import { fade } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.sass'],
  animations: [fade],
})
export class LoadingSpinnerComponent {
  constructor() {}
}
