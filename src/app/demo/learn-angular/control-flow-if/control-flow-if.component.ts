import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-if',
  standalone: true,
  imports: [],
  template: `
    <p>
      @if (isLoggedIn){
        Vous être conecté
      } @else {
        Merci de vous identifier
      }

    </p>
  `,
  styles: ``
})
export class ControlFlowIfComponent {
  isLoggedIn = true;
}
