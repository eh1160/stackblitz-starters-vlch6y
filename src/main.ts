import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TimeInputComponent } from './app/time-input/time-input.component'
import 'zone.js';
import { TzTestComponent } from './app/tz-test/tz-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'main.html',
  imports: [
    TimeInputComponent,
    TzTestComponent
  ]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
