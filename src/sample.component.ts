import { ContryService } from './country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>`
})
export class SampleComponent {

  constructor(public countryService:ContryService) {
   
  }

}
