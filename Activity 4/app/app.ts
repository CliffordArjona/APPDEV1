import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F5', '#33FF5'];
  currentColorIndex = signal (0);
  currentColor = signal(this.colors[0]);

  changeColor(){
    //Calculating the next index of colors
    const nextIndex = (this.currentColorIndex() + 1) % this.colors.length;
    this.currentColorIndex.set(nextIndex);
    this.currentColor.set(this.colors[nextIndex]);
  }
}