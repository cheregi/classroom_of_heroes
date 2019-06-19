import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { CLASSMATES } from '../mock-classmates';

@Component({
  selector: 'app-classmates',
  templateUrl: './classmates.component.html',
  styleUrls: ['./classmates.component.css']
})
export class ClassmatesComponent implements OnInit {
  bestStudent: Student = {
    firstName: "diana",
    lastName: "cheregi",
    interMark: 20,
    finalMark: 20
  };
  //  CONST FROM A future service
  allClassMates: Student[] = CLASSMATES;
  //modified into "selectedStudent: Student" from "currentClassmates:Student"
  selectedStudent: Student;
  //modified here also
  // on click "selectStudent(classmates: Student) {" from surrentClassmates(classmates: Student) {
  selectStudent(classmates: Student) {
    this.selectedStudent = classmates;
  }
  // mean
  mean(student: Student): number {
    const result: number = (student.interMark + student.finalMark) / 2;
    return result;
  }
  constructor() { }

  ngOnInit() {
  };
}
