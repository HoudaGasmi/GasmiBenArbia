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
chercher(){
  var __FOUND = -1;
for(var i=0; i<this.lesHotels.length; i++) {
	if(this.lesHotels[i].nom == document.getElementById('name')?.textContent ) {
		// __FOUND is set to the index of the element
		__FOUND = i;
		break;
	}
}

// // On success __FOUND will contain the index of the element
// // On failure it will contain -1  
// console.log(__FOUND);
}
  constructor(private hotelservice:HotelService ) { }

  ngOnInit(): void {
    this.lesHotels=this.hotelservice.getHotel();
  }

}
