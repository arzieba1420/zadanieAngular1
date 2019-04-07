import { Component, OnInit } from '@angular/core';
import {Film} from './Film';

@Component({
  selector: 'app-filmy',
  templateUrl: './filmy.component.html',
  styleUrls: ['./filmy.component.css']
})
export class FilmyComponent implements OnInit {

  FilmsArray: Film[]=[
    new Film("Film1","Spielberg",2000,7.9),
    new Film("Film2","Besson",2009,6.9),
    new Film("Film3","Wajda",1990,7.1)

  ]

  constructor() { }

  ngOnInit() {
  }

}
