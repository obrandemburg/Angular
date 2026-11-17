import { Component } from '@angular/core';
import { ChangeNumber } from '../change-number/change-number';

@Component({
  imports: [ChangeNumber],
  selector: 'app-emitter',
  styleUrl: './emitter.css',
  templateUrl: './emitter.html',
})
export class Emitter {
  numero : number = 0;

  onChangeNumber() {
    this.numero = Math.floor(Math.random() * 10);
  }

}
