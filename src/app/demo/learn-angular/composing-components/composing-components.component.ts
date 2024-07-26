import { Component } from '@angular/core';
import {UserComponentComponent} from "./user-component/user-component.component";

@Component({
  selector: 'app-composing-components',
  standalone: true,
  imports: [
    UserComponentComponent
  ],
  template: `
    <app-user-component></app-user-component>
  `,
  styles: ``
})
export class ComposingComponentsComponent {


}
