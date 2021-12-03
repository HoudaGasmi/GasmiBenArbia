import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login[]=[];
f=new FormGroup({
});
  
  reset(){
    this.f.reset();
  }
  display:boolean = false;
  onAfficher(){
  this.display= !this.display;
  }
  onAfficher1(){
    this.display= !this.display;
    }
    onAfficher2(){
      this.display= !this.display;
      }
  constructor(private fb:FormBuilder,private server:HotelService) { }

  ngOnInit(): void {
    this.f = this.fb.group({
      nom:['', Validators.required],
      mdp: ['', Validators.required],
      });
      this.login=this.server.getLogin();
   }

   get name(){
    return this.f.controls.nom;
  }
   get password(){
   return this.f.controls.mdp;
   }

   connecter(){
     for (let i = 0; i < this.login.length; i++) {
      if(this.f.controls.nom.value==this.login[i].nom && this.login[i].mdp==this.f.controls.mdp.value)
      {return true;}
       
     }
     return false;
    
   }

   
   Ajouter(){
     
   }



  // isValidPattern():boolean{
  //   return this.f.controls['nom'].errors?.pattern &&
  //   this.f.controls['nom'].dirty;
  //   }
}
