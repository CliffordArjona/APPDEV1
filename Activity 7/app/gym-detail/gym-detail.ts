import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gym-detail',
  standalone: false,
  templateUrl: './gym-detail.html'
})
export class GymDetail {
  leader: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      const gyms = history.state.gyms || [];
      const id = params.get('id');
      this.leader = gyms.find((g: any) => g.id === id);
      if (!this.leader) {
        this.router.navigate(['/']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
