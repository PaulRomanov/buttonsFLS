import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticOperationsComponent } from './components/arithmetic-operations/arithmetic-operations.component';
import { FlowsComponent } from './components/flows/flows.component';

const routes: Routes = [
  { path: '', component: ArithmeticOperationsComponent },
  { path: 'arithmeticOperations', component: ArithmeticOperationsComponent },
  { path: 'flowsComponent', component: FlowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
