import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss']
})
export class TimeInputComponent implements OnInit {
  public _time!: string
  @Output() outDate = new EventEmitter<Date>()

  @Input()
  set time(date: Date) {
    this._time = moment(date).format('HH:mm')
  }

  constructor() { }

  ngOnInit(): void { }
  
  setDate() {
    console.log(this._time)
    // if (this._time.length === 4) {
      const time = moment(new Date()).set({ 'hour': Number(this._time[0] + this._time[1]), minute: Number(this._time[3] + this._time[4]), second: 0, millisecond: 0 }).toDate()

      this.outDate.emit(time)
    // }
  }

}
