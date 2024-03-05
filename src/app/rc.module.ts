import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RcComponent } from './rc.component';

@NgModule({
  declarations: [
    RcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RcComponent]
})
export class RcModule { }
