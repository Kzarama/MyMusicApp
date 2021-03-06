import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { generateRandomString } from '../shared/utils';

@Injectable({
  providedIn: 'root',
})
// Service that use the API of Spotify
export class ApiSpotifyService {
  constructor() {}

  // Login in Spotify and redirect at the page selected
  login = async () => {
    const redirect_url = environment.SpotifyRedirectUrl;
    const client_id = environment.SpotifyClientId;
    const state = generateRandomString(16);
    const scope = [
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-state',
      'user-top-read',
      'user-modify-playback-state',
      'user-library-read',
      'user-follow-read',
      'user-library-modify',
    ];

    window.location.href =
      `https://accounts.spotify.com/authorize?` +
      `client_id=${client_id}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(redirect_url || '')}` +
      `&scope=${scope}` +
      `&state=${state}` +
      `&show_dialog=false`;
  };

  // Get the token from the url
  getTokenFromURL = async () => {
    const urlQuery = window.location.search;
    const urlParams = new URLSearchParams(urlQuery);
    const codeParam = urlParams.get('code');
    localStorage.setItem('code', codeParam || '');
  };

  // Get the authorization code from Spotify
  getAuthorizationToken = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Basic ' +
        btoa(
          environment.SpotifyClientId + ':' + environment.SpotifyClientSecret
        )
    );
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    var urlencoded = new URLSearchParams();
    urlencoded.append('grant_type', 'authorization_code');
    urlencoded.append('code', localStorage.getItem('code') || '');
    urlencoded.append('redirect_uri', environment.SpotifyRedirectUrl || '');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    await fetch('https://accounts.spotify.com/api/token', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('access_token', result['access_token']);
        localStorage.setItem('refresh_token', result['refresh_token']);
      })
      .catch((error) => console.log('error', error));
  };

  // Refresh the token when expires
  // @param parent_function: any function that crash for 401 error
  refresh_token = async (parent_function: any) => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Basic ' +
        btoa(
          environment.SpotifyClientId + ':' + environment.SpotifyClientSecret
        )
    );
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    var urlencoded = new URLSearchParams();
    urlencoded.append('grant_type', 'refresh_token');
    urlencoded.append(
      'refresh_token',
      localStorage.getItem('refresh_token') || ''
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    await fetch('https://accounts.spotify.com/api/token', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('access_token', result['access_token']);
        parent_function();
      })
      .catch((error) => console.log('error', error));
  };

  // Get the user info from Spotify
  getUser = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('access_token')
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    await fetch('https://api.spotify.com/v1/me', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result['error'] && result['error']['status'] === 401) {
          this.refresh_token(this.getUser());
        } else {
          localStorage.setItem('user', JSON.stringify(result));
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  // Get the favorites tracks of the user from Spotify
  getFavorites = async (url: string) => {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('access_token')
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result['error'] && result['error']['status'] === 401) {
          this.refresh_token(this.getFavorites(url));
        } else {
          localStorage.setItem('favorites', JSON.stringify(result));
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  // Get the recommended tracks from Spotify
  getTop = async (url: string) => {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('access_token')
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result['error'] && result['error']['status'] === 401) {
          this.refresh_token(this.getTop(url));
        } else {
          localStorage.setItem('top', JSON.stringify(result));
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
}
