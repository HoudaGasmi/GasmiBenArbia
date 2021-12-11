import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  f=new FormGroup({});

  constructor(private fb:FormBuilder,private server:HotelService) { }

  ngOnInit(): void {
    this.f = this.fb.group({});
  }

   reset(){
    this.f.reset();
  }

}
