import { Component } from '@angular/core';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  template: `
    <p>
      username : {{ username }}
    </p>
  `,
  styles: ``
})
export class UserComponentComponent {
  username = 'Bellec'
}
