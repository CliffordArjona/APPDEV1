import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
Date = new Date().getFullYear();
Author = "Clifford Arjona";
Major = "Bachelor of Science in Computer Science";
School = "University of Baguio";
}