import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle, NgClass],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class Directives {
  classes = ['text-success', 'text-uppercase'];

}
