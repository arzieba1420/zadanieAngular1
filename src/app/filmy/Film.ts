
export class Film {

  title: string;
  author: string;
  rokProdukcji: number;
  ocenaFilmu: number;

  constructor(tytuł: string, reżyser: string, rokProdukcji: number, ocenaFilmu:number){
    this.title=tytuł;
    this.author=reżyser;
    this.rokProdukcji=rokProdukcji;
    this.ocenaFilmu=ocenaFilmu;
  }

}
