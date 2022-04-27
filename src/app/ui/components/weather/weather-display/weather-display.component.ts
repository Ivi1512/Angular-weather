import { IWeatherResult } from '../../../../core/domain/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {

  @Input() data: IWeatherResult = {};

  constructor() { }

  ngOnInit(): void {
  }

}
