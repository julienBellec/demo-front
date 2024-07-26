import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  template:
    `
    <p>The user's name is {{occupation}}</p>
  `,
  styles: ``
})
export class InputComponent {
  @Input() occupation = '';
}
