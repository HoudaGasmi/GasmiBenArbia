import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { Picture } from '../picture';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  p: Picture = new Picture();
  i: Picture = new Picture();
  lesHotels:Hotel[]=[];
//  chaine!:string;
//  b:boolean=false;
//  hotel:Hotel[]=[];
 f=new FormGroup(
  {
    recherche : new FormControl('')
  }
  );

  display:boolean = false;
  onAfficher(){
  this.display= !this.display;
  }

  // getRecherche(){
  //   for (let i =0;i<this.lesHotels.length;i++) {
  //     if((this.lesHotels[i].region==this.f.controls.recherche.value)||(this.lesHotels[i].prix==this.f.controls.recherche.value))
  //     {this.hotel.push(this.lesHotels[i]);
  //       this.b=true;
  //       console.log(true) ;}
  //   } 
  // }
  constructor(private hotelservice:HotelService ) { }

  ngOnInit(): void {
    this.hotelservice.getHotels()
    .subscribe(
      data => this.lesHotels = data
    )
  }

  recherche(){

  }


}
