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
    new Hotel("a","Royal Kenz Thalasso & Spa",102,
    [
      new Picture("/assets/thalasso.jpg","/assets/sousse.jpg","/assets/kenz.jpg","/assets/thalasso1.jpg","/assets/thalasso2.jpg")],"Sousse","/assets/5etoile.png",true),
    new Hotel("b",'Hotel Mövenpick ',225,
      [new Picture ("/assets/mvmpik.jpg","/assets/mvp.jpg","/assets/mvp1.jpg","/assets/mvp2.jpg","/assets/mvp3.jpg")],'Sousse','/assets/5etoile.png',false),
      new Hotel("c","Steigenberger Marhaba Thalasso",150,
    [
      new Picture("/assets/hammamet3.jpg","/assets/hammamet1.jpg","/assets/hammamet.jpg","/assets/hammamet4.jpg","/assets/hammamet2.jpg")],"Hammamet","/assets/4etoile.png",true),
    new Hotel("d","Blue Marine Hotel & Thalasso",92,
    [
      new Picture("/assets/Blue.jpg","/assets/Blue1.jpg","/assets/Blue2.jpg","/assets/Blue3.jpg","/assets/Blue4.jpg")],"Hammamet","assets/4etoile.png",false),
    new Hotel("e",'Hotel La Cigale',140,
      [new Picture ("/assets/cigal1.jpg","/assets/cigal4.jpg","/assets/cigal2.jpg","/assets/cigal3.jpg","/assets/cigal.jpg")],'Tabarka','/assets/5etoile.png',false),
    new Hotel("f",'Hotel Thabraca',99,
    [new Picture ("/assets/tabraka1.jpg","/assets/tabraka2.jpg","/assets/tabraka3.jpg","/assets/tabraka4.jpg","/assets/tabraka.jpg")],'Tabarka','/assets/4etoile.png',true),
    
    new Hotel("g","Iberostar Selection Kuriat Palace ",174,
    [
      new Picture("/assets/monastir5.jpg","/assets/monastir6.jpg","/assets/monastir7.jpg","/assets/monastir8.jpg","/assets/monastir9.jpg")],"Monastir","/assets/5etoile.png",true),
    new Hotel("h","Royal Thalassa Monastir",153,
    [
      new Picture("/assets/monastir.jpg","/assets/monastir1.jpg","/assets/monastir2.jpg","/assets/monastir3.jpg","/assets/monastir4.jpg")],"Monastir","/assets/4etoile.png",true),
    new Hotel("i","Iberostar Royal El Mansour",156,
      [
        new Picture("/assets/mahdia.jpg","/assets/mahdia1.jpg","/assets/mahdia2.jpg","/assets/mahdia3.jpg","/assets/mahdia4.jpg")],"Mahdia","/assets/5etoile.png",true),
    new Hotel("j","Mahdia Palace ",138,
      [
        new Picture("/assets/mahdia5.jpg","/assets/mahdia6.jpg","/assets/mahdia7.jpg","/assets/mahdia8.jpg","/assets/mahdia9.jpg")],"Mahdia","/assets/4etoile.png",false)
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
  
  public addHotel(h:Hotel){
    let h1:Hotel = Object.assign({}, h);
    this.lesHotels.push(h1);
  }
}
