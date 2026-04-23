import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    {name:'Neha',age:21,course:'aiml'},
    {name:'Soham',age:19,course:'cse'},
    {name:'Raj',age:18,course:'aida'}
  ];
  getStudents(){
    return this.students;
  }
}
