import { Component, OnInit } from '@angular/core';
import { favorites } from 'src/app/interfaces/favorites';
import { getFavorites } from 'src/app/utils/login_spotify/login_spotify';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass'],
})
export class FavoritesComponent implements OnInit {
  // favorites: favorites = {
  //   href: '',
  //   items: [],
  //   limit: 0,
  //   next: '',
  //   offset: 0,
  //   previous: '',
  //   total: 0,
  // };
  favorites: any;

  constructor() {}

  ngOnInit(): void {
    getFavorites();
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '');
    console.log(this.favorites);
  }
}
