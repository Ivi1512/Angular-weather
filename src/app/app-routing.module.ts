import { WeatherComponent } from './ui/components/weather/weather.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const rutas: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', loadChildren: () => import('./ui/components/weather/weather.module').then(m => m.WeatherModule), canLoad: [ AuthGuard ] },
  { path: 'users', loadChildren: () => import('./ui/components/users/users.module').then(m => m.UsersModule), canLoad: [ AuthGuard ] },
  { path: 'authentication', loadChildren: () => import('./ui/components/authentication/authentication.module').then(m => m.AuthenticationModule) },
  

  /*

  */
];


@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
