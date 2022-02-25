import { Component } from '@angular/core';
import { filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'fw-arithmetic-operations',
  templateUrl: './arithmetic-operations.component.html',
  styleUrls: ['./arithmetic-operations.component.scss']
})

export class ArithmeticOperationsComponent {

  public numbers = interval(1000).pipe(take(20));

  public valueEl$: any;
  public valueEl: Array<number> = [];
  public valueElCut: Array<number> = [];
  public valueElDivided: Array<number> = [];

  constructor() { }

  public valueMultipliedByTree() {
   this.valueEl$ =  this.numbers.pipe(map((element: number) => element * 3))
    .subscribe((element: number) => {
      this.valueEl = [...this.valueEl, element] // this.valueEl.push(element)
    });
  }

  public firstSevenValues() {
    this.valueEl$ =  this.numbers.pipe(take(7))
    .subscribe((element: number) => {
      this.valueElCut = [...this.valueElCut, element]
    });
  }

  public dividedByTwo(){
    this.valueEl$ =  this.numbers.pipe(filter(element => element % 2 == 0))
    .subscribe((element: number) => {
      this.valueElDivided = [...this.valueElDivided, element]
    });
  }

}


