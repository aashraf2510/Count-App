import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathElevateService {
  add(a: string, b: string): number {
    return parseInt(a) + parseInt(b);
  }

  subtruct(x: number, y: number): number {
    return x - y;
  }
}
