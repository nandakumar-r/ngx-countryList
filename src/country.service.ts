import { COUNTRY_LIST } from './country-list-constants';
import { Injectable } from '@angular/core';

@Injectable()
export class ContryService {
public countryData;
  constructor() {
    this.countryData=COUNTRY_LIST;
  }
  //Display all country Details
  getAllCountryDetails(){
    return this.countryData;
  }
}
