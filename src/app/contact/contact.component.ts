import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

f=new FormGroup({ message : new FormControl(''),
  civ : new FormControl('',[Validators.required]),
  prenom : new FormControl('',[Validators.required]),
  nom : new FormControl('',[Validators.required]),
  tel : new FormControl('',[Validators.required]),
  mail : new FormControl('',[Validators.required]),
  addresse : new FormControl('',[Validators.required])
} );
  
constructor() { }

reset(){
  this.f.reset();
}
ngOnInit(): void {}

method(){
  console.log( this.f.value);
  console.log(this.f.controls.civ.value);
}

}
