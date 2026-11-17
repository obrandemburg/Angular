import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ParentDataComponent } from './components/parent-data-component/parent-data-component';
import { Directives } from './components/directives/directives';
import { IfRender } from './components/if-render/if-render';
import { Eventos } from './components/eventos/eventos';

@Component({
  imports: [RouterOutlet, FirstComponent, ParentDataComponent, Directives, IfRender, Eventos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  userName = 'Matheus';
  birthDate = '12/2/2005';

  protected readonly title = signal('curso-angular-13');
}
