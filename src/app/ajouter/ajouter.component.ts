import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  lesHotels:Hotel[]=[];
  // Hotel=new Hotel();
  f:FormGroup=this.fb.group({
    id:  ['',Validators.required],
    nom : ['',Validators.required],
    prix : [,Validators.required],
    region : ['',Validators.required],
    image1 : ['',Validators.required],
    image2 : ['',Validators.required],
    image3 : ['',Validators.required],
    image4 : ['',Validators.required],
    image5 : ['',Validators.required],
    nbEtoiles : ['/assets/5etoile.png',Validators.required],
    promo : ['true',Validators.required]
  });

  constructor(private fb:FormBuilder, private hotelservice:HotelService) { }

  ngOnInit(): void {
    this.hotelservice.getHotels()
    .subscribe(
      hotels => this.lesHotels = hotels
    )
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
    return this.f.controls.nbEtoiles;
  }
  get promo(){
    return this.f.controls.promo;
  }                                  

  reset(){
    this.f.reset();
  }

  onAjouter(){
      this.hotelservice.addHotel(this.f.value)
      .subscribe(
        hotel => console.log(hotel)
      )
  }

}
