import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RcComponent } from './rc.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    RcComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RcComponent]
})
export class RcModule { }
