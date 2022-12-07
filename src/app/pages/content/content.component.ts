import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  contentPhotoCover: string = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
  @Input()
  contentTitle: string = "My news"
  @Input()
  contentDate: Date = new Date()
  @Input()
  contentText: string = "hello world"

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe ( value =>
      console.log(value.get("id"))
    )
  }

}
