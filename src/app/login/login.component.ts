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

  display0:boolean = false;
 
 
  onAfficher0(){
    this.display0= !this.display0;
  }

  Reset(){
    this.f.reset();
  }

  
  constructor(private fb:FormBuilder,private server:HotelService) { }

  ngOnInit(): void {
    this.f = this.fb.group({
      mdp :['', Validators.required],
      nom : ['', Validators.required],
    });

    this.login=this.server.getLogin();

    // this.lesHotels=this.server.getHotel();
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

}
