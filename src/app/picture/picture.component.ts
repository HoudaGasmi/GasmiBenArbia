import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @Input() pic: Picture = new Picture();
  constructor() { }

  ngOnInit(): void {
  }

}
