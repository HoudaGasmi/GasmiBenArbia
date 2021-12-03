import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  f=new FormGroup({ c : new FormControl('') } );
  constructor() { }

  reset(){
    this.f.reset();
  }
  ngOnInit(): void {
  }

}
