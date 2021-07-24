import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  user: IUser = {
    display_name: '',
    id: '',
    images: [],
  };

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '');
  }
}
