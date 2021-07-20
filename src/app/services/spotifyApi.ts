import { environment } from 'src/environments/environment';
import { generateRandomString } from '../shared/login_spotify/utils';

export const login = async () => {
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

export const getTokenFromURL = async () => {
  const urlQuery = window.location.search;
  const urlParams = new URLSearchParams(urlQuery);
  const codeParam = urlParams.get('code');
  localStorage.setItem('code', codeParam || '');
};

export const getAuthorizationToken = async () => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Basic ' +
      btoa(environment.SpotifyClientId + ':' + environment.SpotifyClientSecret)
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

export const refresh_token = async (parent_function: any) => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Basic ' +
      btoa(environment.SpotifyClientId + ':' + environment.SpotifyClientSecret)
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

export const getUser = async () => {
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
        refresh_token(getUser());
      } else {
        localStorage.setItem('user', JSON.stringify(result));
      }
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const getFavorites = async (url: string) => {
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
        refresh_token(getFavorites(url));
      } else {
        localStorage.setItem('favorites', JSON.stringify(result));
      }
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const getTop = async (url: string) => {
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
        refresh_token(getTop(url));
      } else {
        localStorage.setItem('top', JSON.stringify(result));
      }
    })
    .catch((error) => {
      console.log('error', error);
    });
};
