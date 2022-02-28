import { Component } from '@angular/core';
import { concat, concatMap, delay, interval, map, of, repeat, Subscription, switchMap, take, toArray } from 'rxjs';

@Component({
  selector: 'fw-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.scss']
})
export class FlowsComponent {
  public numbers = interval(1000).pipe(take(20));
  public numbers2 = interval(100).pipe(take(20));

  public valueFlows$!: Subscription;
  public valueFlowsDelayOf200: Array<number> = [];
  public valueNewFlowElements: Array<number> = [];
  public valueTest: Array<number> = [];

  public newValueFlows$!: Subscription;

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

    this.newValueFlows$ = this.numbers2
      .subscribe((element: number) => {
        this.valueNewFlowElements = [...this.valueNewFlowElements, element]

        // concat(this.valueFlowsDelayOf200, this.valueNewFlowElements)
        // this.valueFlowsDelayOf200.concat(this.valueNewFlowElements)

        // this.valueTest = ([] as any[]).concat(this.newValueFlows$, this.valueFlows$)
      });


  }

  public test() {
    // this.delayOf200()
    // this.newFlowElements()

    // this.valueTest = this.valueTest.concat(this.valueNewFlowElements , this.valueFlowsDelayOf200)
    this.valueTest = ([] as any[]).concat(this.valueNewFlowElements , this.valueNewFlowElements)


    // concat(this.newValueFlows$, this.valueFlows$).subscribe(value => {
    //   console.log(value);
    // });

    // concat(this.newValueFlows$, this.newValueFlows$)
    // .pipe(toArray())
    // .subscribe(value => {
    //   console.log('is array = ', Array.isArray(value));
    //   console.log(`value = `, value);
    // });


  }



  ngOnDestroy() {
    this.valueFlows$.unsubscribe();
  }

}
