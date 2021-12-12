import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {

  lesHotels:Hotel[]=[];

  constructor(private server:HotelService) { }

  ngOnInit(): void {
    // this.lesHotels=this.server.getHotel();
  }

}
