import { WeatherService } from '../../../../core/services/weather.service';
import { IFeature, ISearchItem, IWeatherResult } from '../../../../core/domain/types';
import { LocationService } from '../../../../core/services/location.service';
import { Component } from "@angular/core";
import { ISearchResult } from 'src/app/core/domain/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html'
})
export class SearchLocationComponent {


  selectedItem: ISearchItem | undefined;

  results: ISearchItem[] = [];

  private subs: Subscription[] = [];

  /**
   *
   */
  constructor(private service: LocationService,
              private weatherService: WeatherService) {

  }

  search(text: string) {
      console.log( text );
      const sub1 = this.service.buscarCiudades( text ).subscribe( this.observer )
      this.subs.push(sub1);

  }

  onItemSelected(event: ISearchItem) {

    if (event && event.value && event.value.center) {
      const [ lon, lat ] = event.value.center;

      const sub2 = this.weatherService.searchWeatherByLatLon( lat, lon ).subscribe( this.weatherObserver );

      this.subs.push(sub2);
    }

  }

  private weatherObserver = (response: IWeatherResult) => {

    this.weatherService.setWeatherResult( response );

  }

   private observer = (response: ISearchResult) => {
      // const results : string[] = [];
      // for (let r of response?.features as IFeature[]) {
      //   results.push( r.place_name as string );
      // }

      if (response && response.features) {
        console.log( response.features );
        const results: ISearchItem[] =  response.features?.map( result => {
          return { label: result.place_name as string, value: result  };
        } )

        console.log(  results );
        this.results = [...results];
      }


   }

   ngOnDestroy(): void {
    this.subs.forEach( sub => sub.unsubscribe() );
  }
}
