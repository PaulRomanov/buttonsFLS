import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticOperationsComponent } from './components/arithmetic-operations/arithmetic-operations.component';

const routes: Routes = [
  { path: '', component: ArithmeticOperationsComponent },
  { path: 'arithmeticOperations', component: ArithmeticOperationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
