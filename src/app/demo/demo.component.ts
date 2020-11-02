import { Component, OnInit } from '@angular/core';
import csc from 'country-state-city';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }
  arrCountries = [];
  arrStates = [];
  arrCities = [];
  ngOnInit() {
    this.arrCountries = csc.getAllCountries();
  }

  changeCountry(cId) {
    this.arrStates = csc.getStatesOfCountry(cId);
    this.arrCities = [];
    this.arrStates.forEach(objItem => {
      csc.getCitiesOfState(objItem.id + '').map(x => {
        this.arrCities.push(x);
      });
    });
  }
}
