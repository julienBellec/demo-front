import { Component } from '@angular/core';
import {ComponentsInAngularComponent} from "../learn-angular/components-in-angular/components-in-angular.component";
import {
  UpdatingTheComponentClassComponent
} from "../learn-angular/updating-the-component-class/updating-the-component-class.component";
import {ComposingComponentsComponent} from "../learn-angular/composing-components/composing-components.component";
import {ControlFlowIfComponent} from "../learn-angular/control-flow-if/control-flow-if.component";
import {ControlFlowForComponent} from "../learn-angular/control-flow-for/control-flow-for.component";
import {PropertyBindingComponent} from "../learn-angular/property-binding/property-binding.component";

@Component({
  selector: 'app-demo-angular',
  standalone: true,
  imports: [
    ComponentsInAngularComponent,
    UpdatingTheComponentClassComponent,
    ComposingComponentsComponent,
    ControlFlowIfComponent,
    ControlFlowForComponent,
    PropertyBindingComponent
  ],
  template: `

    <div class="container">
      <div class="row">
        <p>Learn Angular</p>
        <p><a href="https://angular.dev/tutorials/learn-angular" target="_blank">Docmumentation</a></p>
      </div>
      <div class="row">
        <p><a href="https://angular.dev/tutorials/learn-angular/1-components-in-angular" target="_blank">1-components-in-angular</a></p>
      </div>
      <div class="row">
        <app-components-in-angular></app-components-in-angular>
      </div>
      <div class="row">
        <p><a href="https://angular.dev/tutorials/learn-angular/2-updating-the-component-class" target="_blank">2-updating-the-component-class</a></p>
      </div>
      <div class="row">
        <app-updating-the-component-class></app-updating-the-component-class>
      </div>
      <div class="row">
        <p><a href="https://angular.dev/tutorials/learn-angular/3-composing-components" target="_blank">3-composing-components</a></p>
      </div>
      <div class="row">
        <app-composing-components></app-composing-components>
      </div>
      <div class="row">
        <p><a href="https://angular.dev/tutorials/learn-angular/4-control-flow-if" target="_blank">4-control-flow-if</a></p>
      </div>
      <div class="row">
        <app-control-flow-if></app-control-flow-if>
      </div>
      <div class="row">
        <p><a href="https://angular.dev/tutorials/learn-angular/5-control-flow-for" target="_blank">5-control-flow-for</a></p>
      </div>
      <div class="row">
        <app-control-flow-for></app-control-flow-for>
      </div>
      <div class="row">
        <p><a href="https://angular.dev/tutorials/learn-angular/6-property-binding" target="_blank">6-property-binding</a></p>
      </div>
      <div class="row">
        <app-property-binding></app-property-binding>
      </div>


    </div>
  `,
  styles: ``
})
export class DemoAngularComponent {

}
