import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLocationComponent } from './search-location/search-location.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { WeatherComponent } from './weather.component';
import { TempPipe } from 'src/app/core/pipes/temp.pipe';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: WeatherComponent, canActivate: [AuthGuard] },

  { path: 'asd', component: WeatherComponent }
];

@NgModule({
  declarations: [
    SearchLocationComponent,
    WeatherDisplayComponent,
    WeatherComponent,
    TempPipe
  ],
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WeatherModule { }
