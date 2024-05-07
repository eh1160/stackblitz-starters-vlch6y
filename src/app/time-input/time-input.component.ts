import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-time-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './time-input.component.html',
  styleUrl: './time-input.component.scss'
})
export class TimeInputComponent implements OnInit {
  inputDateTime: string = '8:30:00 AM';
  outputDateTime: string | null = null;
  isValid: boolean = false;
  validTimeFormats: Set<string> = new Set([
    'h:mm', // defaults to AM
    'h:mm a', // includes AM/PM
    'H:mm', // 24 hour

    'h:mm:ss',
    'h:mm:ss a',
    'H:mm:ss',
  ]);

  invalidReason: string | null = null;
  invalidExplanation: string | null = null;

  validateTime(inputTime: string): void {
    for (const timeFormat of this.validTimeFormats) {
      const givenDateTime: DateTime = DateTime.fromFormat(
        inputTime.trim(),
        timeFormat
      );

      if (givenDateTime.isValid) {
        this.outputDateTime = givenDateTime.toISO();
        this.isValid = true;
        this.invalidReason = null;
        this.invalidExplanation = null;
        break;
      } else {
        this.outputDateTime = null;
        this.isValid = false;
        this.invalidReason = givenDateTime.invalidReason;
        this.invalidExplanation = givenDateTime.invalidExplanation;
      }
    }
  }

  ngOnInit(): void {
    this.validateTime(this.inputDateTime);
  }
}
