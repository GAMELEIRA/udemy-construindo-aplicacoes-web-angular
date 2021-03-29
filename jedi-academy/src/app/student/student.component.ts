import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  inputs: []
})
export class StudentComponent implements OnInit {

  @Input() public student: Student;
  @Output() public talkHi = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clicked(event: any): void {
    this.talkHi.emit();
    console.log(event);
  }

}
