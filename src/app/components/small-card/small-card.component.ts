import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  smallCardPhotoCover: string = ""
  @Input()
  smallCardPhotoAlt: string = ""
  @Input()
  smallCardDate: Date = new Date("December 5, 2022")
  @Input()
  smallCardDiscription: string = ""
  @Input()
  smallCardLink: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
