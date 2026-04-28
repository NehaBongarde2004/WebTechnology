import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    { name: 'Neha', age: 21, course: 'AIML' },
    { name: 'Soham', age: 19, course: 'IT' },
    { name: 'Raj', age: 18, course: 'ME' }
  ];

  getStudents() {
    return this.students;
  }
}