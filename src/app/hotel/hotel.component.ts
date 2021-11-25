import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

lesHotels:Hotel[]=[];
  constructor(private hotelservice:HotelService ) { }

  ngOnInit(): void {
    this.lesHotels=this.hotelservice.getHotel();
  }

}
