import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() im: Picture = new Picture();

  constructor() { }

  ngOnInit(): void {
  }

}
