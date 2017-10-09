import { SampleService } from './sample.service';
import { Component } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>`
})
export class SampleComponent {

  constructor(public countryService:SampleService) {
    console.log(this.countryService.getAllCountryDetails());
  }

}
