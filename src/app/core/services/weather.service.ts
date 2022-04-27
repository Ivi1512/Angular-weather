import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IWeatherResult } from '../domain/types';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private endpoint = 'https://api.openweathermap.org/data/2.5/weather';

  private _weatherResult = new Subject<IWeatherResult>();

  public _weatherResultChanged$ = this._weatherResult.asObservable();

  constructor(private http: HttpClient) { }

  public searchWeatherByLatLon(lat: number, lon: number, units = 'metric'): Observable<IWeatherResult> {
    const url = `${this.endpoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${environment.weatherApiKey}`;
    return this.http.get(url);
  }

  public setWeatherResult( data: IWeatherResult ): void {
    this._weatherResult.next( data );
  }
}
