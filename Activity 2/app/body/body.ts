import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  profile = {
    name: 'Clifford Arjona',
    title: 'Student',
    about: 'Passionate in creating and functional applications',
    skills: ['Java', 'Python', 'HTML/CSS']
  };

  education = {
    college: 'Bachelor of Science in Computer Science - University of Baguio (2024–Present)',
    shs: 'Senior High School - Baguio City National Science High School (2022–2024)'
  };

  awards = {
    award1: 'Best in Tambay (2022–2024)',
    award2: 'Best in Imbento (2024)'
  };

  experiences = {
    exp1: 'P.M.A (2024) – Assisted in web development',
    exp2: 'Learning Programming in UB as a Student (2024–Present)'
  };

  courses = {
    c1: { name: 'APPDEV', teacher: 'Sir. Jeremy' },
    c2: { name: 'PROGIT2', teacher: 'Sir. Meynard' },
    c3: { name: 'DSAGO', teacher: 'Maam. Cherrie' }
  };
}