import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { LoadingComponent } from './components/pages/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogoComponent,
    NavbarComponent,
    HeaderComponent,
    LayoutComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
