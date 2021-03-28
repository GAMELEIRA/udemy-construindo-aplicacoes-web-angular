import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  inputs: []
})
export class StudentComponent implements OnInit {

  @Input() public student: Student;

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    console.log(`Student: ${this.student.name}`)
  }

}
