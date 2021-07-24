import { Component, Input } from '@angular/core';

import { ITracks } from 'src/app/interfaces/ITracks';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.sass'],
})
export class PageTemplateComponent {
  @Input() tracks: ITracks = {
    items: [],
    next: '',
    previous: '',
  };
  @Input() loading: boolean = false;
  @Input() home: boolean = true;

  constructor() {}
}
