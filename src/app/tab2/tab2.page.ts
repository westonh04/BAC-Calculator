import { Component } from '@angular/core';
import { BacCalcService } from '../services/bac-calc.service';




@Component({
  selector: 'app-tab2', 
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
  
})
export class Tab2Page {

  constructor(public myService: BacCalcService) {

  }

}
