import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-eventos',
  styleUrl: './eventos.css',
  templateUrl: './eventos.html',
})
export class Eventos {

  mostrar: boolean = true;
  canShow() : void{
    this.mostrar = !this.mostrar;
  }

}
