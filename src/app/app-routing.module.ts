import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticOperationsComponent } from './components/arithmetic-operations/arithmetic-operations.component';
import { FlowsComponent } from './components/flows/flows.component';
import { ThreeStreamsComponent } from './components/three-streams/three-streams.component';

const routes: Routes = [
  { path: '', component: ArithmeticOperationsComponent },
  { path: 'arithmeticOperations', component: ArithmeticOperationsComponent },
  { path: 'flowsComponent', component: FlowsComponent },
  { path: 'threeStreams', component: ThreeStreamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
