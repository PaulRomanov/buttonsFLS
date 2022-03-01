import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArithmeticOperationsModule } from './components/arithmetic-operations/arithmetic-operations.module';
import { FlowsModule } from './components/flows/flows.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArithmeticOperationsModule,
    HeaderModule,
    FlowsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
