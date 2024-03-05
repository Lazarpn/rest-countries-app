import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RcComponent } from './rc.component';
import { HeaderComponent } from './header/header.component';
import { CountriesComponent } from './+countries/countries.component';
import { RcRoutingModule } from './rc-routing.module';
import { CountriesListComponent } from './+countries/countries-list/countries-list.component';
import { CountryComponent } from './+countries/countries-list/country/country.component';

@NgModule({
  declarations: [
    RcComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RcRoutingModule
  ],
  providers: [],
  bootstrap: [RcComponent]
})
export class RcModule { }
