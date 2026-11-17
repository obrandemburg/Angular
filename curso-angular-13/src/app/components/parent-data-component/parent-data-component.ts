import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-parent-data-component',
  styleUrl: './parent-data-component.css',
  templateUrl: './parent-data-component.html',
})
export class ParentDataComponent {
@Input() name: string = '';
@Input() dataNascimento: string = '';

}
