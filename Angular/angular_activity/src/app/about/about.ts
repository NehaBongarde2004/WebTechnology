import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>About Page</h2>
    <p>This is a student project built using Angular.</p>
    <p><b>Name:</b>Neha Bongarde</p>
    <p><b>Course:</b> CSE(AIML)</p>
    <p>This project shows understanding of Angular fundamentals.</p>
  `
})
export class AboutComponent {}