import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

//Array of colors
colors: string[] = ['#2c3e50','#e74c3c','#3498db','#9b59b6','#1abc9c','#f39c12']

currentColorIndex: number = 0;
//function to change the color of name
changeNameColor(){
  this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
}
//get the current color
get currentColor(): string {
  return this.colors
  [this.currentColorIndex];
}
  profile = {
    name: 'Clifford Arjona',
    title: 'Software Developer',
    about: 'Passionate about creating beautiful and functional applications',
    skills: ['Angular','Typescript','HTML/CSS','Responsive Design'],
  
experience: [
  { 
    role: 'Web Developer',
    company: 'Tech Solutions Inc.',
    period: '2022-Present',
    description:'Developing and maintaining web applications using Angular and related technologies.'},
    {
      role: 'Frontend Intern',
      company: 'Digital Creations',
      period: '2021-2022',
      description: 'Assisted in building resposive user interfaces and implementing new features',
    },
], 
    education: {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Baguio',
      year: '2027'
    },
    contact:{
    email:   'cliffordarjona@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Manila, Philippines'
    }
  }
}