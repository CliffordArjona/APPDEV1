import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  footer = {
    owner: 'Clifford Arjona',
    year: new Date().getFullYear(),
    school: 'University of Baguio',
    message: 'All Rights Reserved'
  };
}