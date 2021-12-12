import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  lesHotels:Hotel[]=[];
  f:FormGroup=this.fb.group({
    id:  ['',Validators.required],
    nom : ['',Validators.required],
    prix : [0,Validators.required],
    region : ['',Validators.required],
    image1 : ['',Validators.required],
    image2 : ['',Validators.required],
    image3 : ['',Validators.required],
    image4 : ['',Validators.required],
    image5 : ['',Validators.required],
    nbEtoile : ['/assets/5etoile.png',Validators.required],
    promo : ['true',Validators.required]
  });

  constructor(private fb:FormBuilder, private hotelsevice:HotelService) { }

  ngOnInit(): void {
  }

  get id(){
    return this.f.controls.id;
    }
  get nom(){
    return this.f.controls.nom;
  }
  get prix(){
    return this.f.controls.prix;
  }
  get image1(){
    return this.f.controls.image1;
  }
  get image2(){
    return this.f.controls.image2;
  }
  get image3(){
    return this.f.controls.image3;
  }
  get image4(){
    return this.f.controls.image4;
  }
  get image5(){
    return this.f.controls.image5;
  }
  get region(){
    return this.f.controls.region;
  }
  get nbEtoile(){
    return this.f.controls.image2;
  }
  get promo(){
    return this.f.controls.image2;
  }

  reset(){

  }

  onModifier(){
    this.hotelsevice.updateHotel(this.f.controls['id'].value,this.f.value)
    .subscribe(
      hotel=>{
      let position = this.lesHotels.findIndex(this.f.value => this.f.controls['id'].value == hotel.id);
      this.lesHotels[potision]= hotel ;
      })
  }

}


