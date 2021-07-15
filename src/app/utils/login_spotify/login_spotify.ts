import { environment } from 'src/environments/environment';

const generateRandomString = (length: number): string => {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const login = (): void => {
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
    `&redirect_uri=${encodeURIComponent(redirect_url)}` +
    `&scope=${scope}` +
    `&state=${state}` +
    `&show_dialog=false`;
};

export const getTokenFromURL = (): void => {
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
  myHeaders.append(
    'Cookie',
    '__HOST-sp_fid=f2e2189b-1f37-45f8-afcf-f791e20c1d96; __Host-device_id=AQBu52PIMxNsplCvU7B5PhWycDehEIl0pYwyXNNwLRYx8nzsyDWX_ufbifEovHuT1-OQHzgrSenHYkrYKhPCy5U0FMlwqOyNJ5k'
  );

  var urlencoded = new URLSearchParams();
  urlencoded.append('grant_type', 'authorization_code');
  urlencoded.append('code', localStorage.getItem('code') || '');
  urlencoded.append('redirect_uri', 'http://localhost:4200/');

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
  };

  fetch('https://accounts.spotify.com/api/token', requestOptions)
    .then((response) => response.json())
    .then((result) =>
      localStorage.setItem('access_token', result['access_token'])
    )
    .catch((error) => console.log('error', error));
};

export const getUser = async () => {
  const access_token = localStorage.getItem('access_token');
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Bearer ' + access_token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  return fetch('https://api.spotify.com/v1/me', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('error', error));
};
