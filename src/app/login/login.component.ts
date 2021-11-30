import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
f=new FormGroup({
  nom: new FormControl(''),
  mdp : new FormControl('')
});
  onSubmit(){

  }
  reset(){
    this.f.reset();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
