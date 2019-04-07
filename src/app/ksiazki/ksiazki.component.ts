import { Component, OnInit } from '@angular/core';
import {Ksiazka} from './Ksiazka';

@Component({
  selector: 'app-ksiazki',
  templateUrl: './ksiazki.component.html',
  styleUrls: ['./ksiazki.component.css']
})
export class KsiazkiComponent implements OnInit {

  BooksArray: Ksiazka[]=[
    new Ksiazka("Potop","Sienkiewicz",1990,590,99.90),
    new Ksiazka("Dzieci z Bullerbyn","Lindgren",2000,290,29.90),
    new Ksiazka("Niebezpieczne związki Donalda Tuska","Sumliński",2016,410,39.90)


  ]
  constructor() { }

  ngOnInit() {
  }

}
