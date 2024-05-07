import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TimeInputComponent } from './app/time-input/time-input.component'
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'main.html',
  imports: [
    TimeInputComponent
  ]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
