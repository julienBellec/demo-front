import { Component } from '@angular/core';
import {ComponentsInAngularComponent} from "./components-in-angular/components-in-angular.component";
import {
  UpdatingTheComponentClassComponent
} from "./updating-the-component-class/updating-the-component-class.component";
import {ComposingComponentsComponent} from "./composing-components/composing-components.component";
import {ControlFlowIfComponent} from "./control-flow-if/control-flow-if.component";
import {ControlFlowForComponent} from "./control-flow-for/control-flow-for.component";
import {PropertyBindingComponent} from "./property-binding/property-binding.component";
import {EventHandlingComponent} from "./event-handling/event-handling.component";
import {InputComponent} from "./input/input.component";
import {OutputComponent} from "./output/output.component";

@Component({
  selector: 'app-learn-angular',
  standalone: true,
  imports: [
    ComponentsInAngularComponent,
    UpdatingTheComponentClassComponent,
    ComposingComponentsComponent,
    ControlFlowIfComponent,
    ControlFlowForComponent,
    PropertyBindingComponent,
    EventHandlingComponent,
    InputComponent,
    OutputComponent
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
      <div class="row">
        <p><a href="https://angular.dev/tutorials/learn-angular/7-event-handling" target="_blank">7-event-handling</a></p>
      </div>
      <div class="row">
        <app-event-handling></app-event-handling>
      </div>
      <div class="row">
        <p><a href="https://angular.dev/tutorials/learn-angular/8-input" target="_blank">8-input</a></p>
      </div>
      <div class="row">
        <app-input occupation="Angular Developer"></app-input>
      </div>
      <div class="row">
        <p><a href="https://angular.dev/tutorials/learn-angular/9-output" target="_blank">9-output</a></p>
      </div>
      <div class="row">
        <app-output></app-output>
      </div>


    </div>
  `,
  styles: ``
})
export class LearnAngularComponent {

}
