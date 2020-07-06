import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';



@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {


  lat;
  lon;
  

  constructor(private geolocation: Geolocation) { 
    

    

   

  }
  //returns lat and lon from geo sensor
  whereAmI(){
    this.geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((res)=>{
      this.lat = res.coords.latitude;
      this.lon = res.coords.longitude;
    }).catch((e)=>{
      console.log(e);
    })
    

  //Uber webview link 
  }
  uberClick(){

    window.open('https://m.uber.com/?client_id=_ekladMFwT5r5gIXq0kgBkrvyc99LGiz&action=setPickup&pickup[latitude]='+this.lat+'&pickup[longitude]='+this.lon+'&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d', '_system');

  }

}
