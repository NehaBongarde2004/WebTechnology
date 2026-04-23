import { Component } from '@angular/core';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-student-list',
  imports: [],
  import { StudentService } from './../services/student-service';
templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: any[] = []; //any[]-> means it can store any type of data
}

/**
 *
 */
constructor(private studentService:StudentService) {}

//lifecycle hook -
//ng oninit()-this method runs automatically when component loads 
ngOninit(){
  
}