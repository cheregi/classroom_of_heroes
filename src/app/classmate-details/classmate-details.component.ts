import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-classmate-details',
  templateUrl: './classmate-details.component.html',
  styleUrls: ['./classmate-details.component.css']
})
export class ClassmateDetailsComponent implements OnInit {
  //ASK FOR AN ATRIBUT TO
  //use the property inside the html
  @Input() currentClassmates: Student;

  addPoints() {
    this.currentClassmates.interMark++;
    this.currentClassmates.finalMark++;
  }
  constructor() { }

  ngOnInit() {
  }

}
