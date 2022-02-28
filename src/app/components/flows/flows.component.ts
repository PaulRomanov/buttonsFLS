import { Component } from '@angular/core';
import { concatMap, delay, interval, map, of, repeat, Subscription, switchMap, take } from 'rxjs';

@Component({
  selector: 'fw-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.scss']
})
export class FlowsComponent {
  public numbers = interval(1000).pipe(take(20));

  public valueFlows$!: Subscription;
  public valueFlowsDelayOf200: Array<number> = [];

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


   ngOnDestroy() {
    this.valueFlows$.unsubscribe();
  }

}
