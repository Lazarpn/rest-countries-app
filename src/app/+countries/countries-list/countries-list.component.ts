import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rc-countries-list',
  templateUrl: 'countries-list.component.html',
  styleUrls: ['countries-list.component.scss']
})

export class CountriesListComponent implements OnInit {
  countries = [
    { population: 80000, region: 'Balkan', capital: 'Belgrade' },
    { population: 70000, region: 'Balkan', capital: 'Novi Sad' },
    { population: 50000, region: 'Balkan', capital: 'Subotica' },
    { population: 30000, region: 'Balkan', capital: 'Paracin' },
  ];

  constructor() { }

  ngOnInit() { }
}
