import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathElevateService {
  add(a: string, b: string): number {
    console.log('add method called with', a, b);
    return parseInt(a) + parseInt(b);
  }

  subtruct(x: number, y: number): number {
    return x - y;
  }
}
