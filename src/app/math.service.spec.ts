import { TestBed } from '@angular/core/testing';
import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {   //this test is for the service to be created ok
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => { //this test is for the add function
    expect(service.add(1, 2)).toBe(5);          
  });
});

