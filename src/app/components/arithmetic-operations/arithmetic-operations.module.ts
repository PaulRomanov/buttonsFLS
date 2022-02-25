import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticOperationsComponent } from './arithmetic-operations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArithmeticOperationsComponent],
  exports: [ArithmeticOperationsComponent],
})
export class ArithmeticOperationsModule { }
