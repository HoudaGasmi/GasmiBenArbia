import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

 lesHotels:Hotel[]=[];
 chaine!:string;
 b:boolean=false;
 hotel:Hotel[]=[];
 f=new FormGroup(
  {
    recherche : new FormControl('')
  }
  );
  getRecherche(){
    for (let i =0;i<this.lesHotels.length;i++) {
      if(this.lesHotels[i].region==this.f.controls.recherche.value)
      {this.hotel.push(this.lesHotels[i]);
        this.b=true;
        console.log(true) ;}
    } 
  }
  constructor(private hotelservice:HotelService ) { }

  ngOnInit(): void {
    this.lesHotels=this.hotelservice.getHotel();
  }


}
