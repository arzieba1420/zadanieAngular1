
export class Ksiazka {

title: string;
autor: string;
rokWydania: number;
liczbaStron: number;
cenaKsiazki: number;

constructor(tytuł: string, autor: string, rokWydania: number, liczbaStron: number, cenaKsiazki: number) {
  this.title = tytuł;
  this.autor = autor;
  this.rokWydania = rokWydania;
  this.liczbaStron = liczbaStron;
  this.cenaKsiazki = cenaKsiazki;

}

}
