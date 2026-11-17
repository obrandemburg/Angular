import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-first-component',
  styleUrl: './first-component.css',
  templateUrl: './first-component.html',
})
export class FirstComponent implements OnInit {

  name: string = 'Matheus';
  age : number = 19;
  job: string = 'Programador';
  hobbies = ['Correr', 'Academia', 'Dançar'];

  constructor() { }

  ngOnInit(): void {
  }
}
