import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ParentDataComponent } from './components/parent-data-component/parent-data-component';

@Component({
  imports: [RouterOutlet, FirstComponent, ParentDataComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  userName = 'Matheus';
  birthDate = '12/2/2005';

  protected readonly title = signal('curso-angular-13');
}
