import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { ContryService } from './country.service';

export * from './sample.component';
export * from './country.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent
  ],
  exports: [
    SampleComponent
  ],
  providers:[ContryService]
})
export class CountryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CountryModule,
      providers: [ContryService]
    };
  }
}
