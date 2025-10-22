import { Component } from '@angular/core';

@Component({
  selector: 'app-taoteching',
  standalone: false,
  templateUrl: './taoteching.html',
  styleUrls: ['./taoteching.css']
})
export class Taoteching {
  taoQuotes = [
    { chapter: 'Chapter 1', body: 'The Tao that can be told is not the eternal Tao.' },
    { chapter: 'Chapter 2', body: 'When people see some things as beautiful, other things become ugly.' },
    { chapter: 'Chapter 8', body: 'The supreme good is like water. It benefits all things and does not compete.' },
    { chapter: 'Chapter 16', body: 'Empty yourself of everything. Let the mind rest at peace.' },
    { chapter: 'Chapter 76', body: 'The disciple of life is soft and yielding, the disciple of death is hard and brittle.' }
  ];
}
