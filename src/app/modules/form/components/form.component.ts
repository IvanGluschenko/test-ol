import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  control: FormControl = new FormControl()
  group: FormGroup = new FormGroup({})
  secondGroup: FormGroup = new FormGroup({})
  date: Date = new Date()

  // time: Date = this.date.get
  string: string = 'sdfsdf'
  formDate = new FormControl(new Date())
  // regExp: RegExp = /^[^<>*!]+$/ 

  constructor() { }

  ngOnInit(): void {
    // this.control.setValue('Ivan')
    // this.control.valueChanges.subscribe((value) => console.log(value))
    // this.control.statusChanges.subscribe((status) => console.log(status))

    // this.group.setControl('first', new FormControl('first'))
    // this.group.setControl('last', new FormControl('last'))

    // const ar = new FormArray([
    //   new FormControl('asdasd'),
    //   new FormControl('fghfgh'),
    //   new FormControl('werwer')
    // ])
    // this.secondGroup.setControl('list', ar)
  }

  // toConsole(e: unknown) {
  //   console.log(e)
  // }

  // ngDoCheck() {
  //   console.log('doCheck', Zone.currentTask.source);
  // }

  setDate(e: Event) {
    console.log(e)
  }

  cons() {
    console.log(1)
  }

}

// function myValidator(control: FormControl) {
//   if (control.value > 3) {
//     return { validator: { message: 'Error message' } }
//   }
//   return null
// }