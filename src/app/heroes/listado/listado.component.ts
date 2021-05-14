import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  public heroes: string[] = ['Ironman','Spiderman','Hulk','Thor',' Capitán América'];
  public heroeBorrado: string = '';

  borrarHeroe(){

  this.heroeBorrado = this.heroes.shift() || '';

}
}
