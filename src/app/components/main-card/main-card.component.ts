import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  photoCover:string = "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  cardDate:Date = new Date("December 5, 2022")
  cardTitle:string = "Afinal, o que é o Angular e para que serve?"
  cardText:string = "O Angular é um framework JavaScript que simplifica não apenas a construção da interface de usuário, mas também o desenvolvimento de aplicações client-side diferenciadas, sejam elas para a web, mobile ou desktop. O Angular usa a linguagem TypeScript como padrão, ao invés do JavaScript. Então recomenda-se aprofundar os estudos sobre essa linguagem."
  cardLink:string = "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started"

  constructor() { }

  ngOnInit(): void {
  }

}
