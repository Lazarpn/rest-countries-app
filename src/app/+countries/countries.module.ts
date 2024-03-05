import { NgModule } from '@angular/core';
import { CountriesRoutingModule } from './countries-rounting.module';
import { CountriesComponent } from './countries.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryComponent } from './countries-list/country/country.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  exports: [],
  declarations: [
    CountriesComponent,
    CountriesListComponent,
    CountryComponent],
  providers: [],
})
export class CountriesModule { }
