import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GymLeaders } from '../gym-leaders';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gym-detail',
  standalone: false,
  templateUrl: './gym-detail.html'
})
export class GymDetail {
  leader: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gymService: GymLeaders,
    private location: Location
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const gyms = [
        this.gymService.getGymLeaderFalkner(),
        this.gymService.getGymLeaderBugsy(),
        this.gymService.getGymLeaderWhitney(),
        this.gymService.getGymLeaderMorty(),
        this.gymService.getGymLeaderChuck(),
        this.gymService.getGymLeaderJasmine(),
        this.gymService.getGymLeaderPryce(),
        this.gymService.getGymLeaderClair()
      ];
      this.leader = gyms.find(g => g.id === id);
      if (!this.leader) {
        this.router.navigate(['/']);
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
