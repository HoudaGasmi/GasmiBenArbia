import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';
import { Login } from './login';
import { Picture } from './picture';
import { observable } from 'rxjs';

const URL = "http://localhost:3000/lesHotels";
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  // lesHotels:Hotel[]=[
  //   new Hotel("a","Royal Kenz Thalasso & Spa",102,
  //   [
  //     new Picture("/assets/thalasso.jpg","/assets/sousse.jpg","/assets/kenz.jpg")],"Sousse","/assets/5etoile.png",true),
  //   new Hotel("b","Steigenberger Marhaba Thalasso",150,
  //   [
  //     new Picture("/assets/hammamet3.jpg","/assets/hammamet1.jpg","/assets/hammamet1.jpg")],"Hammamet","/assets/4etoile.png",true),
  //   new Hotel("c","Blue Marine Hotel & Thalasso",92,
  //   [
  //     new Picture("/assets/Blue.jpg","/assets/Blue1.jpg","/assets/Blue2.jpg")],"Hammamet","assets/4etoile.png",false),
  //     new Hotel("d",'Hotel La Cigale',140,
  //     [new Picture ("/assets/cigal1.jpg","/assets/cigal4.jpg","/assets/cigal2.jpg","/assets/cigal3.jpg","/assets/cigal.jpg")],'Tabarka','/assets/5etoile.png',false),
  //     new Hotel("e",'Hotel Thabraca',99,
  //     [new Picture ("/assets/tabraka1.jpg","/assets/tabraka2.jpg","/assets/tabraka3.jpg","/assets/tabraka4.jpg","/assets/tabraka.jpg")],'Tabarka','/assets/4etoile.png',true),
  //     new Hotel("f",'Hotel Mövenpick ',225,
  //     [new Picture ("/assets/mvmpik.jpg","/assets/mvp.jpg","/assets/mvp1.jpg","/assets/mvp2.jpg","/assets/mvp3.jpg")],'Sousse','/assets/5etoile.png',false),
  //     new Hotel("g","Iberostar Royal El Mansour",156,
  //     [new Picture("/assets/mahdia.jpg","/assets/mahdia1.jpg","/assets/mahdia2.jpg","/assets/mahdia3.jpg","/assets/mahdia4.jpg")],"Mahdia","/assets/5etoile.png",true),
  //     new Hotel("h","Mahdia Palace ",138,
  //     [new Picture("/assets/mahdia5.jpg","/assets/mahdia6.jpg","/assets/mahdia7.jpg","/assets/mahdia8.jpg","/assets/mahdia9.jpg")],"Mahdia","/assets/4etoile.png",false)   
  // ]
   login:Login[]=[
     new Login("Houda Gasmi","123456"),
     new Login("Oumaima Ben Arbia","123456")
   ]
   id: string="";
  constructor(private http: HttpClient) { }

  getLogin(){
    return this.login;
  }

  // public addHotel(h:Hotel){
  //   this.lesHotels.push(h);
  // }

  // public existHotel(id:string):boolean{
  //   return this.lesHotels.find(h=>h.id==id) != undefined;
  // }

  getHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(URL);
  }

  addHotel(h:Hotel):Observable<Hotel[]>{
    return this.http.post<Hotel[]>(URL,h);
  }

  // public deleteHotel(id:string){
  //   var index: number = this.lesHotels.indexOf(id);
  //   if (index !== -1)
  //       this.lesHotels.splice(index, 1);
  // }
  
}
