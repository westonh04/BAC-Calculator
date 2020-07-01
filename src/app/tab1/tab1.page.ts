import { Component } from '@angular/core';
import { BacCalcService } from '../services/bac-calc.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items: Observable<any[]>;
  
  constructor(
    public myService: BacCalcService,
    public navController: NavController,
    public router:Router,
    public db: AngularFireDatabase
    ) {

      this.items = db.list('list').valueChanges();
    }
  


}

