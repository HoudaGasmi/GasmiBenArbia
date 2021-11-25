import { Injectable } from '@angular/core';
import { Hotel } from './hotel';
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
    
    




  ]
  constructor() { }

  getHotel(){
    return this.lesHotels;
  }
}
