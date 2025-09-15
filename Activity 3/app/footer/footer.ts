import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  year = new Date().getFullYear();
  company = 'Keyboard Company';
  message = 'Thank you for choosing the KB-X1000. Type Safe!';
}
