import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  cambiarNombre():void{
    this.name = 'Spiderman';
  }

  cambiarEdad():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'iroman';
    this.age = 45;

    //java script
    //document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
    /**document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    })**/
  }



}
