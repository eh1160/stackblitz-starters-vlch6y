import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'app-time-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './time-input.component.html',
  styleUrl: './time-input.component.scss'
})

export class TimeInputComponent implements OnInit {
  isoTimeFormat: string = 'HH:mm:ss.SSS';
  inputDateTime: string = '8:30';
  outputDateTime: object | undefined = undefined;
  isValid: boolean | undefined = false;

  // moment token definitions: https://momentjs.com/docs/#/parsing/string-format/
  validTimeFormatsNew: string[] = [
    'h:mm', // defaults to AM
    'h:mma', // includes AM/PM (no space)
    'h:mm a', // includes AM/PM (with space)
    'H:mm', // 24 hour

    'h:mm:ss',
    'h:mm:ssa',
    'h:mm:ss a',
    'H:mm:ss',

    //'H:mm:ss.SSS', // exactly 3 fractional seconds
  ];


  validateTime(inputTime: string): void {
    if (inputTime) {
      // https://momentjs.com/docs/#/parsing/string-formats/
      const momentObj = moment(inputTime.trim(), this.validTimeFormatsNew, true);

      // if (givenDateTime.isValid) {
      if (momentObj.isValid()) {
        // this.outputDateTime = momentObj.format('h:mm:ss A');
        // this.outputDateTime = momentObj.toObject();
        this.outputDateTime = {
          hours: momentObj.toObject().hours,
          minutes: momentObj.toObject().minutes,
          seconds: momentObj.toObject().seconds,
          // isoTime: momentObj.utc().format(this.isoTimeFormat), // https://momentjs.com/docs/#/parsing/utc/   <<<< 2024-05-30 This approach is bad because it is influenced by Time Zone.  See next line instead.
          isoTime: momentObj.format(this.isoTimeFormat), // https://momentjs.com/docs/#/displaying/format/
        };
        this.isValid = true;
      } else {
        this.outputDateTime = undefined;
        this.isValid = false;
      }
    } else {
      // empty input
      this.outputDateTime = undefined;
      this.isValid = undefined;
    }
  }

  ngOnInit(): void {
    this.validateTime(this.inputDateTime);
  }
}
