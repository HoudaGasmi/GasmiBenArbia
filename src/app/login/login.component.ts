import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login[]=[];

  lesHotels:Hotel[]=[];

  hotel: Hotel=new Hotel();

  f=new FormGroup({});
  f1=new FormGroup({});
  f2=new FormGroup({});
  f3=new FormGroup({});

  display:boolean = false;
  display1:boolean = false;
  display2:boolean = false;
  display3:boolean = false; 
  display0:boolean = false;
 
  onAfficher(){
    this.display= !this.display;
  }
  onAfficher1(){
    this.display1= !this.display1;
  }
  onAfficher2(){
    this.display2= !this.display2;
  }
  onAfficher3(){
    this.display3= !this.display3;
  }
  onAfficher0(){
    this.display0= !this.display0;
  }

  Reset(){
    this.f.reset();
  }
  reset1(){
    this.f1.reset();
  }
  reset2(){
    this.f2.reset();
  }
  reset3(){
    this.f3.reset();
  }
  
  constructor(private fb:FormBuilder,private server:HotelService) { }

  ngOnInit(): void {
    this.f = this.fb.group({
      mdp :['', Validators.required],
      nom : ['', Validators.required],
    });

    // this.f1 = this.fb.group({
    //   id :['', Validators.required],
    //   name : ['', Validators.required],
    //   prix : ['', Validators.required],
    //   ImageP : ['', Validators.required],
    //   Image1 : ['', Validators.required],
    //   Image2 : ['', Validators.required],
    //   Image3 : ['', Validators.required],
    //   Image4 : ['', Validators.required],
    //   region : ['', Validators.required],
    //   etoile : ['', Validators.required],
    //   promo : ['', Validators.required],
    // });

    // this.f2 = this.fb.group({
    //   id :['', Validators.required],
    //   name : ['', Validators.required],
    //   prix : ['', Validators.required],
    //   etoile : ['', Validators.required],
    //   promo : ['', Validators.required],
    // });

    // this.f3 = this.fb.group({
    //   id :['', Validators.required],
    // });

    this.login=this.server.getLogin();

    this.lesHotels=this.server.getHotel();
  }

  get name(){
    return this.f.controls.nom;
  }
  get password(){
   return this.f.controls.mdp;
  }

  get op(){
    return this.f.controls.op.value;
  }

   connecter(){
     for (let i = 0; i < this.login.length; i++) {
      if(this.f.controls.nom.value==this.login[i].nom && this.login[i].mdp==this.f.controls.mdp.value)
      {return true;}
       
     }
     return false;
    
   }
   
   onAjouter(){
     this.server.addHotel(this.hotel);
   }

   onSupprimer(){

   }

   onModifier(){
     
   }

}
