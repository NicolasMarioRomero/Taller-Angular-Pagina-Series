import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './Serie.component';

@NgModule({
  imports: [
    CommonModule,
    SerieComponent
  ],
  exports: [SerieComponent]
})
export class SerieModule { }