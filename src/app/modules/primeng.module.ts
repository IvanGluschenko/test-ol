import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask'
import { CalendarModule } from 'primeng/calendar'
import {KeyFilterModule} from 'primeng/keyfilter';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputMaskModule,
    CalendarModule,
    KeyFilterModule
  ],
  exports: [
    InputMaskModule,
    CalendarModule,
    KeyFilterModule
  ]
})
export class PrimengModule { }
