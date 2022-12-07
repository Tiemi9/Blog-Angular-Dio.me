import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css', './main-card.component.responsive.css']
})
export class MainCardComponent implements OnInit {
  @Input()
  photoCover:string = ""
  @Input()
  cardDate:Date = new Date()
  @Input()
  cardTitle:string = ""
  @Input()
  cardText:string = ""
  @Input()
  cardLink:string = ""
  @Input()
  linkTitle:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
