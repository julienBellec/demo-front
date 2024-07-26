import { Component } from '@angular/core';
import {OutputChildComponent} from "./output-child/output-child.component";

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [
    OutputChildComponent
  ],
  template: `
    <app-output-child (addItemEvent)="addItem($event)" />
    <p>all the way down {{ items.length }}</p>
  `,
  styles: ``
})
export class OutputComponent {
  items = new Array();
  addItem(item: string) {
    this.items.push(item);
  }
}
