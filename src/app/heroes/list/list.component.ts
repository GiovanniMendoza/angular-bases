import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;//VARIABLE OPCIONAL

  removeLastHero():void{
    /**const deleteHero = this.heroNames.pop();
    console.log(deleteHero);**/
    this.deleteHero = this.heroNames.pop();//REMUEVE EL ULTIMO ELEMENTO DE LA LISTA Y LO RETORNA
  }

}
