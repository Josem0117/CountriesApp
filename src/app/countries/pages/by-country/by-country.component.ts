import { Component, } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country} from '../../interfaces/country-interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
  styles:[
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  term:string = '';
  showsuggestions:boolean = false;
  ErrorFound: Boolean = false;
  countries : Country[] = [];
  Suggestedcountries : Country[] = [];

  get data(){
    return this.countries;
  }

  constructor(private CountriesService: CountriesService) { }
  Search(term:string){
    this.ErrorFound = false;
    this.term = term;
    console.log(this.term);

    this.CountriesService.SearchCountry(this.term)
    .subscribe((countries) =>  {
      console.log(countries);
      this.countries = countries;
    }, (err)=>{
      this.ErrorFound = true;
      this.countries = [];
      console.info(err);
    })
  }
  Suggest(term:string){
    console.log("a");
    this.ErrorFound =false;
    this.term = term;
    this.showsuggestions = true;
    this.CountriesService.SearchCountry(term)
     .subscribe(countries => this.Suggestedcountries = countries.splice(0,3));
    console.log(this.Suggestedcountries);
  }
  searchSuggestions(term:string){
    this.Search(term);
  }

  
}

