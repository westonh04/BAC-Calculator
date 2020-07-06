import { Component } from '@angular/core';
import { BacCalcService } from '../services/bac-calc.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public createUserForm: FormGroup;
  constructor(
    public myService: BacCalcService,
    public navController: NavController,
    public router:Router,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreService: FirestoreService,
    formBuilder: FormBuilder
    ) {
      this.createUserForm = formBuilder.group({
        name: ['', Validators.required],
        gender: ['', Validators.required],
        birthday: ['', Validators.required],
        weight: ['', Validators.required],
      });

    }
  
    async createUser() {
      const loading = await this.loadingCtrl.create();
    
      const name = this.createUserForm.value.name;
      const gender = this.createUserForm.value.gender;
      const birthday = this.createUserForm.value.birthday;
      const weight = this.createUserForm.value.weight;
    
      this.firestoreService
        .createUser(name, gender, birthday, weight)
        .then(
          () => {
            loading.dismiss().then(() => {
              //[routerLink]="['']"
              this.router.navigateByUrl('/tabs/tab2');
            });
          },
          error => {
            console.error(error);
          }
        );
    
      return await loading.present();
    }

}

