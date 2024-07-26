import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output-child',
  standalone: true,
  imports: [],
  template: `
    <button class="btn btn-primary" (click)="addItem()">Add Item</button>
  `,
  styles: ``
})
export class OutputChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
