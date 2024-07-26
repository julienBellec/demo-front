import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LearnAngularComponent} from "./demo-angular/learn-angular/learn-angular.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LearnAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-front';
}
