import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rc-country',
  templateUrl: 'country.component.html',
  styleUrls: ['country.component.scss']
})

export class CountryComponent implements OnInit {
  @Input() country;

  constructor() { }

  ngOnInit() { }
}
