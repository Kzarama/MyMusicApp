import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass'],
})
export class UserInfoComponent implements OnInit {
  @Input() user: user = {
    display_name: '',
    id: '',
    images: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
