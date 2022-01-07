import { Component, Input} from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html'
})
export class CountriesTableComponent{

  @Input() data: Country[] = [];
  constructor(private CountriesService: CountriesService) { }


}
