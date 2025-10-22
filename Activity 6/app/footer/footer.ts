import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  studentName = "Clifford Arjona";
  activityNumber = "Activity Guide #6";
  activityDate = "September 24, 2025";
}
