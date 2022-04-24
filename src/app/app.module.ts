import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CountdownComponent } from './pages/countdown/countdown.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoalsComponent } from './pages/goals/goals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    HeaderComponent,
    AboutUsComponent,
    GalleryComponent,
    CountdownComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
