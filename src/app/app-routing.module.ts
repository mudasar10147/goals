import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth-gaurd.service';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CountdownComponent } from './pages/countdown/countdown.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGaurdService]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'aboutus', component: AboutUsComponent, canActivate: [AuthGaurdService]},
  {path: 'gallery', component: GalleryComponent, canActivate: [AuthGaurdService]},
  {path: 'countdown', component: CountdownComponent, canActivate: [AuthGaurdService]},
  {path: 'goal', component: GoalsComponent, canActivate: [AuthGaurdService]},
  {path: 'signin', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
