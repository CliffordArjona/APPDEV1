import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  profilePic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFf90AhXWYeao_x-6WfQJg06bUB2SZFreWw&s';
  name = 'Clifford Xhyrus D. Arjona';
  address = 'Quezon Hill Extension';
  contact = '09123456789';
}
