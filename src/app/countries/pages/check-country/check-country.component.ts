import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country, Languages } from '../../interfaces/country-interface';


@Component({
  selector: 'app-check-country',
  templateUrl: './check-country.component.html',
  styleUrls: ['./check-country.component.css']
})
export class CheckCountryComponent implements OnInit {
  country!: Country[] ;

  constructor(private activatedRoute: ActivatedRoute,
    private CountriesService: CountriesService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.CountriesService.getCountryByCode(id)),
      tap(console.log)
    )
    .subscribe(country=>this.country = country);

    // this.activatedRoute.params
    // .subscribe(({id}) =>{  
    //   console.log(id);
    //   this.CountriesService.getCountryByCode(id)
    //   .subscribe( country =>{
    //     console.log(country);
    //   })
    // })
    
  }

}
