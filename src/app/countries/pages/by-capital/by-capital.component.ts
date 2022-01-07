import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  term:string = '';
  ErrorFound: Boolean = false;
  countries : Country[] = [];
  Suggestedcountries: Country[] = [];
  constructor(private CountriesService:CountriesService) { }

  ngOnInit(): void {
  }
  Search(term:string){
    this.ErrorFound = false;
    this.term = term;
    console.log(this.term);

    this.CountriesService.SearchCapital(this.term)
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
    this.CountriesService.SearchCapital(term)
     .subscribe(capital => this.Suggestedcountries = capital.splice(0,3));
    console.log(this.Suggestedcountries);
  }
  
}


