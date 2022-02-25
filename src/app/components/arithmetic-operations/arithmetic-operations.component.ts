import { Component, EventEmitter, Output } from '@angular/core';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'fw-arithmetic-operations',
  templateUrl: './arithmetic-operations.component.html',
  styleUrls: ['./arithmetic-operations.component.scss']
})

export class ArithmeticOperationsComponent {

  public numbers = interval(1000).pipe(take(20));

  public valueEl$: any
  public valueEl: Array<number> = []

  constructor() { }

  public valueMultipliedByTree() {
   this.valueEl$ =  this.numbers.pipe(map((element: number) => element * 3))
    .subscribe((element: number) => {
      this.valueEl.push(element)
    });
  }

}

