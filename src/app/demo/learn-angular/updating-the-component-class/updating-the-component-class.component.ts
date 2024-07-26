import { Component } from '@angular/core';

@Component({
  selector: 'app-updating-the-component-class',
  standalone: true,
  imports: [],
  template: `
    <p>
      Hello {{city}} , {{ 1 + 1}}
    </p>
  `,
  styles: ``
})
export class UpdatingTheComponentClassComponent {
  city = 'Casson';

}
