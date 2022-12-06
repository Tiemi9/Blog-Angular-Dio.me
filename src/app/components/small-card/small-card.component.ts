import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  smallCardPhotoCover: string = "https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  smallCardPhotoAlt: string = "Imagem de tela de computador com código desfocado"
  smallCardDate: Date = new Date("December 5, 2022")
  smallCardDiscription: string = "Angular CLI é uma ferramenta de linha de comando que facilita a criação de diversos artefatos necessários em uma aplicação Angular."
  smallCardLink: string = "https://angular.io/cli"
  constructor() { }

  ngOnInit(): void {
  }

}
