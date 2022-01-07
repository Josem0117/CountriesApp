import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/country-interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) { }
  
  SearchCountry(term:string) : Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`
    
    return this.http.get<Country[]>(url);
  }
  SearchCapital(term:string) : Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`
    
    return this.http.get<Country[]>(url);
  }
  getCountryByCode(id:string) : Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }
  SearchByRegion(term:string) : Observable<Country[]>{
    const url = `${this.apiUrl}/region/${term}`
    return this.http.get<Country[]>(url);
  }
}
