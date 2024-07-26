import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  standalone: true,
  imports: [],
  template: `
    <p (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal {{ message }}
    </p>
  `,
  styles: ``
})
export class EventHandlingComponent {
  message = '';

  onMouseOver() {
    this.message = 'Way to go';
  }
}
