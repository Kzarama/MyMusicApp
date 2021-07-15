import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @Input() user: user = {
    display_name: '',
    external_urls: {},
    followers: {},
    href: '',
    id: '',
    images: [],
    type: '',
    uri: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
