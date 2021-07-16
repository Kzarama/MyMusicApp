import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  user: user = {
    display_name: '',
    id: '',
    images: [],
  };

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '');
  }
}
