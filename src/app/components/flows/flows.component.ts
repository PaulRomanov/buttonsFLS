import { Component } from '@angular/core';
import { concatMap, delay, filter, interval, of, repeat, Subscription, switchMap, take } from 'rxjs';

@Component({
  selector: 'fw-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.scss']
})
export class FlowsComponent {
  public numbers = interval(1000).pipe(take(20));

  public valueFlows$!: Subscription;

  public valueFlowsDelayOf200: Array<number> = [];
  public valueNewFlowElements: Array<number> = [];
  public valueEvenFlowElement: Array<number> = [];

  constructor() { }

  public delayOf200() {
    this.valueFlows$ = this.numbers
      .pipe(
        switchMap(item => of(item).pipe(delay(200), repeat(20)))
      )
      .subscribe((element: number) => {
        this.valueFlowsDelayOf200 = [...this.valueFlowsDelayOf200, element]
      });
  }

  public newFlowElements() {
    this.valueFlows$ = this.numbers
      .pipe(
        concatMap(() => interval(100).pipe(take(10)))
      )
      .subscribe((element: number) => {
        this.valueNewFlowElements = [...this.valueNewFlowElements, element]
      });
  }

  public evenFlowElement() {
    this.valueFlows$ = this.numbers
      .pipe(
        switchMap(item => of(item).pipe(delay(100), repeat(5))),
        filter((element) => element % 2 == 0)
        )
      .subscribe((element: number) => {
        this.valueEvenFlowElement = [...this.valueEvenFlowElement, element]
      });
  }


  ngOnDestroy() {
    this.valueFlows$.unsubscribe();
  }

}
