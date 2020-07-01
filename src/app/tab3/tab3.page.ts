import { Component } from '@angular/core';
import { BacCalcService } from '../services/bac-calc.service';
import { GeoLocationService } from '../services/geo-location.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ionViewWillEnter(){
    //run the calculator function in myService
    this.myService.bac();
    //round to 2 decimals
    this.myService.bacPercent = parseFloat(this.myService.bacPercent).toFixed(2);
    this.geoService.whereAmI();
    }



  constructor(public myService: BacCalcService, public geoService: GeoLocationService) {

  }

}
