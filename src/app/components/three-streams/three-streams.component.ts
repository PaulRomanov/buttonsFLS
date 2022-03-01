import { Component } from '@angular/core';
import { combineLatest, interval, map, Subscription, take } from 'rxjs';

@Component({
  selector: 'fw-three-streams',
  templateUrl: './three-streams.component.html',
  styleUrls: ['./three-streams.component.scss']
})
export class ThreeStreamsComponent {

  public source1 = interval(200).pipe(take(10), map((val) => val));
  public source2 = interval(300).pipe(take(10), map((val) => val));
  public source3 = interval(400).pipe(take(10), map((val) => val));

  public ThreeStreams$!: Subscription;

  public valueLastThreeValues: Array<number> = [];
  public valueLastThreeValues1: Array<number> = [];
  public valueLastThreeValues2: Array<number> = [];
  public valueLastThreeValues3: Array<number> = [];

  constructor() { }

  public lastThreeValues() {
    combineLatest(
      this.source1,
      this.source2,
      this.source3
      )
    .subscribe((element: number[])=>{
      this.valueLastThreeValues1.push(...this.valueLastThreeValues2, ...this.valueLastThreeValues3, ...element);
    })
  }

}
