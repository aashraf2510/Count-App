import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from './store/counter.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'adv-app-test';
  counter!: Observable<number>;
  // counterTwo!: Observable<number>;
  // private store: Store<{ counter: number; counterTwo: number }> = inject(
  //   Store<{ counter: number; counterTwo: number }>
  // );
  private store: Store<{ counter: number }> = inject(
    Store<{ counter: number }>
  );

  increment() {
    this.store.dispatch(increment({ value: 5 }));
  }
  decrement() {
    this.store.dispatch(decrement({ value: 5 }));
  }
  ngOnInit() {
    this.counter = this.store.select('counter');
    // this.counterTwo = this.store.select('counterTwo');
  }
}
