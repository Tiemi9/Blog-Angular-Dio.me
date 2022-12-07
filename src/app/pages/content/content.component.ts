import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  contentPhotoCover: string = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
  @Input()
  contentTitle: string = ""
  @Input()
  contentDate: Date = new Date()
  @Input()
  contentText: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
