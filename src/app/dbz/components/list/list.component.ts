import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterLit: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?:string){
      //TODO: Emitir el ID del personaje

      //SI NO TENGO UN ID
      if (!id) return;

      console.log({id});

      this.onDelete.emit(id);
  }

}
