import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Hotel } from './hotel';
import { Login } from './login';
import { Picture } from './picture';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  lesHotels:Hotel[]=[
    new Hotel("Royal Kenz Thalasso & Spa",102,
    [
      new Picture("/assets/thalasso.jpg","/assets/sousse.jpg","/assets/kenz.jpg")],"Sousse - Tunisie","/assets/5etoile.png",true),
    new Hotel("Steigenberger Marhaba Thalasso",150,
    [
      new Picture("/assets/hammamet3.jpg","/assets/hammamet1.jpg","/assets/hammamet1.jpg")],"Hammamet - Tunisie","/assets/4etoile.png",true),
    new Hotel("Blue Marine Hotel & Thalasso",92,
    [
      new Picture("/assets/Blue.jpg","/assets/Blue1.jpg","/assets/Blue2.jpg")],"Hammamet - Tunisie","assets/4etoile.png",false),
      new Hotel('Hotel La Cigale',140,
      [new Picture ("/assets/cigal1.jpg","/assets/cigal4.jpg","/assets/cigal2.jpg","/assets/cigal3.jpg","/assets/cigal.jpg")],'Tabarka - Tunisie','/assets/5etoile.png',false),
    new Hotel('Hotel Thabraca',99,
    [new Picture ("/assets/tabraka1.jpg","/assets/tabraka2.jpg","/assets/tabraka3.jpg","/assets/tabraka4.jpg","/assets/tabraka.jpg")],'Tabarka - Tunisie','/assets/4etoile.png',true),
    new Hotel('Hotel Mövenpick ',225,
    [new Picture ("/assets/mvmpik.jpg","/assets/mvp.jpg","/assets/mvp1.jpg","/assets/mvp2.jpg","/assets/mvp3.jpg")],'Sousse - Tunisie','/assets/5etoile.png',false)
    
    
  ]
   login:Login[]=[
     new Login("Houda Gasmi","123456"),
     new Login("Oumaima Ben Arbia","123456")
   ]
  constructor() { }

  getHotel(){
    return this.lesHotels;
  }
  getLogin(){
    return this.login;
  }
  ajouter(f:Hotel){
    this.lesHotels.push(f);
  }
  
}
