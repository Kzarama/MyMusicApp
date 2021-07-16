import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/interfaces/user';
import {
  getAuthorizationToken,
  getTokenFromURL,
  getUser,
} from 'src/app/utils/login_spotify/login_spotify';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
})
export class LoadingComponent implements OnInit {
  user: user = {
    display_name: '',
    id: '',
    images: [{ url: '' }],
  };

  constructor(private router: Router) {}

  async ngOnInit() {
    await getTokenFromURL();
    await getAuthorizationToken();
    await getUser();
    this.user = JSON.parse(localStorage.getItem('user') || '');
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 1000);
  }
}
