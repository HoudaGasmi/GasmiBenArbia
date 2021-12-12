import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {

  f:FormGroup=this.fb.group({
    id:  ['',Validators.required]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get id(){
    return this.f.controls.id;
  }

  reset(){

  }

  onSupprimer(){

  }
  

}
