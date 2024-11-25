import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CalculatorComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the result as an empty string', () => {
    expect(component.result).toBe('');
  });

  it('should append values to the result', () => {
    component.appendToResult('1');
    expect(component.result).toBe('1');
    component.appendToResult('2');
    expect(component.result).toBe('12');
  });

  it('should clear the result when clearResult() is called', () => {
    component.appendToResult('5');
    component.appendToResult('0');
    expect(component.result).toBe('50');
    component.clearResult();
    expect(component.result).toBe('');
  });

  it('should calculate the result of a valid expression', () => {
    component.appendToResult('3');
    component.appendToResult('+');
    component.appendToResult('2');
    component.calculateResult();
    expect(component.result).toBe('5');
  });

  it('should handle division by zero', () => {
    component.appendToResult('10');
    component.appendToResult('/');
    component.appendToResult('0');
    component.calculateResult();
    expect(component.result).toBe('Error');  // We expect 'Error' when dividing by zero
  });
  

  it('should handle invalid expressions', () => {
    component.appendToResult('2');
    component.appendToResult('+');
    component.appendToResult('abc');  // Invalid value
    component.calculateResult();
    expect(component.result).toBe('Error');
  });

  it('should display the result in the input field', () => {
    component.appendToResult('4');
    fixture.detectChanges();
    const inputElement: HTMLInputElement = de.query(By.css('.result')).nativeElement;
    expect(inputElement.value).toBe('4');
  });
});
