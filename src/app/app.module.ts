import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { NavbarListComponent } from './components/molecules/navbar-list/navbar-list.component';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { UserInfoComponent } from './components/atoms/user-info/user-info.component';
import { TitleTrackComponent } from './components/atoms/title-track/title-track.component';
import { TrackComponent } from './components/molecules/track/track.component';
import { PageTemplateComponent } from './templates/page-template/page-template.component';
import { TracksComponent } from './components/organisms/tracks/tracks.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { LoadingSpinnerComponent } from './components/atoms/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogoComponent,
    NavbarListComponent,
    NavbarComponent,
    LayoutComponent,
    LoadingComponent,
    FavoritesComponent,
    UserInfoComponent,
    TitleTrackComponent,
    TrackComponent,
    PageTemplateComponent,
    TracksComponent,
    ButtonComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
