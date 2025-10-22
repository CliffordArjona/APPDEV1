import { Component } from '@angular/core';
import { GymLeaders } from '../gym-leaders';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  gyms: any[];

  constructor(private gymService: GymLeaders) {
    this.gyms = [
      this.gymService.getGymLeaderFalkner(),
      this.gymService.getGymLeaderBugsy(),
      this.gymService.getGymLeaderWhitney(),
      this.gymService.getGymLeaderMorty(),
      this.gymService.getGymLeaderChuck(),
      this.gymService.getGymLeaderJasmine(),
      this.gymService.getGymLeaderPryce(),
      this.gymService.getGymLeaderClair(),
    ];
  }
}