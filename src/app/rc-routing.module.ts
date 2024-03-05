import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './+countries/countries.component';

const routes: Routes = [
  {
    path: 'pocetna',
    loadChildren: () => import('./+countries/countries.module').then(m => m.CountriesModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RcRoutingModule { }
