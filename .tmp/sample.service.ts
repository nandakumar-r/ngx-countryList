import { COUNTRY_LIST } from './country-list-constants';
import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {
public countryData;
  constructor() {
    this.countryData=COUNTRY_LIST;
  }
  getAllCountryDetails(){
    return this.countryData;
  }
}
