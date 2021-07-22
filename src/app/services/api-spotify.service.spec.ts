import { TestBed } from '@angular/core/testing';

import { ApiSpotifyService } from './api-spotify.service';

describe('ApiSpotifyService', () => {
  let service: ApiSpotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSpotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should redirect correctly', () => {
  //   const location: Location = TestBed.inject(Location);
  //   service.login();
  //   expect(location.path()).toBe('/loading');
  // });

  // it('save the token in the localStorage', () => {
  //   expect(service.getTokenFromURL()).toBeTruthy(
  //     localStorage.getItem('code') != null
  //   );
  // });

  // it('save the token in the localStorage', () => {
  //   expect(service.getAuthorizationToken()).toBeTruthy(
  //     localStorage.getItem('access_token') != null &&
  //       localStorage.getItem('refresh_token') != null
  //   );
  // });
});
