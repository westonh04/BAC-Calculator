import { Injectable, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class BacCalcService {
  selectedGender: string;
  weight: number;
  saveGender: string;
  beers:number=0;
  wines:number=0;
  shots:number=0;
  cocktails:number=0;
  drinks:number=0.00;
  weightDrink:number=0;
  timeDecrease:number=0;
  hours:number=0;
  bacPercent:any=0;
  result:string;



  addBeer(){
    this.beers+=1;
  }
  addWine(){
    this.wines+=1;
  }
  addShot(){
    this.shots+=1;
  }
  addCocktail(){
    this.cocktails+=1;
  }
  addhour(){
    this.hours+=1;
  }
  reset(){
    this.beers=0;
    this.wines=0;
    this.shots=0;
    this.cocktails=0;
    this.drinks=0;
    this.hours=0;
  }
  bac(){
    this.drinks = this.shots + this.beers + this.wines + (this.cocktails * 1.5)

    if(this.saveGender = "m"){
      if(this.weight <= 100){
        this.weightDrink=0.038;}
      if (this.weight > 100 && this.weight < 110) {
        this.weightDrink=0.038;}
      if (this.weight >= 110 && this.weight <120) {
        this.weightDrink=0.034;}
      if (this.weight >= 120 && this.weight <130) {
        this.weightDrink=0.031}
      if (this.weight >= 130 && this.weight <140) {
        this.weightDrink=0.029}
      if (this.weight >= 140 && this.weight <150) {
        this.weightDrink=0.027}  
      if (this.weight >= 150 && this.weight <160) {
        this.weightDrink=0.025}    
      if (this.weight >= 160 && this.weight <170) {
         this.weightDrink=0.023} 
      if (this.weight >= 170 && this.weight <180) {
         this.weightDrink=0.022}     
      if (this.weight >= 180 && this.weight <190) {
         this.weightDrink=0.021}  
      if (this.weight >= 190 && this.weight <200) {
         this.weightDrink=0.020}  
      if (this.weight >= 200 && this.weight <210) {
         this.weightDrink=0.019}  
      if (this.weight >= 210 && this.weight <220) {
         this.weightDrink=0.018}  
      if (this.weight >= 220 && this.weight <230) {
         this.weightDrink=0.017}  
      if (this.weight >= 230 && this.weight <240) {
         this.weightDrink=0.016}
      if(this.weight > 240){
         this.weightDrink=0.015}
    }


    if(this.saveGender = "f"){
      if(this.weight <= 100){
        this.weightDrink=0.047;}
      if (this.weight > 100 && this.weight < 110) {
        this.weightDrink=0.047;}
      if (this.weight >= 110 && this.weight <120) {
        this.weightDrink=0.042;}
      if (this.weight >= 120 && this.weight <130) {
        this.weightDrink=0.039}
      if (this.weight >= 130 && this.weight <140) {
        this.weightDrink=0.036}
      if (this.weight >= 140 && this.weight <150) {
        this.weightDrink=0.033}  
      if (this.weight >= 150 && this.weight <160) {
        this.weightDrink=0.031}    
      if (this.weight >= 160 && this.weight <170) {
        this.weightDrink=0.029} 
      if (this.weight >= 170 && this.weight <180) {
        this.weightDrink=0.027}     
      if (this.weight >= 180 && this.weight <190) {
        this.weightDrink=0.026}  
      if (this.weight >= 190 && this.weight <200) {
        this.weightDrink=0.024}  
      if (this.weight >= 200 && this.weight <210) {
        this.weightDrink=0.023}  
      if (this.weight >= 210 && this.weight <220) {
        this.weightDrink=0.022}  
      if (this.weight >= 220 && this.weight <230) {
        this.weightDrink=0.021}  
      if (this.weight >= 230 && this.weight <240) {
        this.weightDrink=0.020}
      if (this.weight >= 240 && this.weight <250) {
        this.weightDrink=0.019}   
      if (this.weight >250){
        this.weightDrink=0.018;}
    }       
   
      
    
    
    this.bacPercent=this.weightDrink*this.drinks;
    this.timeDecrease=0.015*this.hours;
    if(this.bacPercent>=0.015){
      this.bacPercent-=this.timeDecrease;
      //round to 2 decimals

      

    if(this.bacPercent<0.02){
      this.result="You should feel no difference at this level."}
    if(this.bacPercent>=0.02 && this.bacPercent<0.04){
      this.result="You should have no loss of coordination, slight euphoria, and loss of shyness. Relaxation, but depressant effects are not apparent."}
    if(this.bacPercent>=0.04 && this.bacPercent<0.06){
      this.result="Feeling of well-being, relaxation, lower inhibitions, and sensation of warmth. Euphoria. Some minor impairment of judgment and memory, lowering of caution."}
    if(this.bacPercent>=0.06 && this.bacPercent<0.1){
      this.result="Slight impairment of balance, speech, vision, reaction time, and hearing. Euphoria. Reduced judgment and self-control. Impaired reasoning and memory."}
    if(this.bacPercent>=0.1 && this.bacPercent<0.13){
      this.result="Significant impairment of motor coordination and loss of good judgment. Speech may be slurred; balance, peripheral vision, reaction time, and hearing will be impaired."}
    if(this.bacPercent>=0.13 && this.bacPercent<0.16){
      this.result="Gross motor impairment and lack of physical control. Blurred vision and major loss of balance. Euphoria is reducing and beginning dysphoria (a state of feeling unwell)"}
    if(this.bacPercent>=0.16 && this.bacPercent<0.20){
      this.result="Dysphoria predominates, nausea may appear. The drinker has the appearance of a sloppy drunk."}
    if(this.bacPercent>=0.20 && this.bacPercent<0.25){
      this.result="Needs assistance in walking; total mental confusion. Dysphoria with nausea and vomiting; possible blackout."}
    if(this.bacPercent>=0.25 && this.bacPercent<0.4){
      this.result="Alcohol poisoning. Loss of consciousness."}
    } else {
      this.result="	Onset of coma, possible death due to respiratory arrest."}
    



  }

  constructor( public navController: NavController, public router:Router) { 

  }

  save(){
    this.saveGender = this.selectedGender;
    
  
  }

    
}

