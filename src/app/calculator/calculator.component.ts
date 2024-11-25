import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  result: string = '';

  // Append a character to the result
  appendToResult(value: string): void {
    this.result += value;
  }

  // Clear the result
  clearResult(): void {
    this.result = '';
  }

  // Calculate the result
  calculateResult(): void {
    try {
      // Check if the expression contains '/0' (division by zero)
      if (this.result.includes('/0')) {
        this.result = 'Error';
      } else {
        // Evaluate the expression using eval() and ensure the result is a string
        this.result = String(eval(this.result)); // Ensure the result is a string
      }

      // After eval(), check if the result is Infinity or -Infinity
      if (this.result === 'Infinity' || this.result === '-Infinity') {
        this.result = 'Error';
      }
    } catch (e) {
      // Catch any errors (invalid syntax, etc.) and display 'Error'
      this.result = 'Error';
    }
  }
}