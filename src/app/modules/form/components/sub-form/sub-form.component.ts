import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss']
})
export class SubFormComponent implements OnInit {
  @Output() event: EventEmitter<boolean> = new EventEmitter()
  @Output() text = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

  changed() {
    this.event.emit(true)
  }

  textEmit(value: string) {
    this.text.emit(value)
  }
}
