import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  add(arg0: number, arg1: number): any {
    return arg0 + arg1;
  }

  constructor() { }
}

