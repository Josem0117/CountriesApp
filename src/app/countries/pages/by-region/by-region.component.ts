import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country-interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class ByRegionComponent{

  regions: string [] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  activeregion: string = '';
  countries: Country[] = [];
  constructor(private CountriesService:CountriesService) { }
  getClassCss(region:string):string{
    return (region == this.activeregion) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activateRegion(region:string){
    if (region == this.activeregion ){
      return
    }
    this.activeregion = region;
    this.countries = [];
    this.CountriesService.SearchByRegion(region)
      .subscribe( countries=>{
        this.countries = countries
      })
    }}