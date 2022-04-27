import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWeatherResult } from 'src/app/core/domain/types';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherResult: IWeatherResult = {};

  private subs: Subscription[] = [];

  constructor( private weatherService: WeatherService ) {}

  ngOnInit(): void {
    const sub1 = this.weatherService._weatherResultChanged$.subscribe( result => this.weatherResult = result);
    this.subs.push(sub1);
  }

  ngOnDestroy(): void {
    this.subs.forEach( sub => sub.unsubscribe() );
  }

}
