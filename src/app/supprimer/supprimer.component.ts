import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {

  f:FormGroup=this.fb.group({
    id:  ['',Validators.required]
  });

  constructor(private fb:FormBuilder, private hotelservice:HotelService) { }

  ngOnInit(): void {
  }

  get id(){
    return this.f.controls.id;
  }

  reset(){

  }

 onSupprimer(){
    this.hotelservice.deleteHotel(this.f.controls['id'].value).subscribe();
  }
  

}
