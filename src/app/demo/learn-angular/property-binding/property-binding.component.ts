import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  template: `
    <div class="div-property-binding" [contentEditable]="isEditable">Div éditable</div>
  `,
  styles: `
    .div-property-binding
    {
      border-top-width: 2px;
      border-right-width: 2px;
      border-bottom-width: 2px;
      border-left-width: 2px;
      border-top-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-left-style: solid;
      border-top-color: rgb(161, 68, 235);
      border-right-color: rgb(161, 68, 235);
      border-bottom-color: rgb(161, 68, 235);
      border-left-color: rgb(161, 68, 235);
      border-image-source: initial;
      border-image-slice: initial;

    }
  `
})
export class PropertyBindingComponent {
  isEditable = true;
}
