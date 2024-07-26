import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-for',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (user of users; track user.id) {
        <li>{{ user.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class ControlFlowForComponent {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}
