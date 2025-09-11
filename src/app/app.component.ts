import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MathElevateService } from 'mathElevate';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'adv-app-test';
  counter: number = 0;
  private readonly _mathService = inject(MathElevateService);

  increment() {
    this.counter = this._mathService.add(
      this.counter.toString(),
      (4).toString()
    );
  }
  decrement() {
    this.counter = this._mathService.subtruct(this.counter, 1);
  }
  ngOnInit() {
    this.counter = 0;
  }
}
