import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { GymDetail } from './gym-detail/gym-detail';

const routes: Routes = [
  { path: '', component: Landing },
  { path: 'gym/:id', component: GymDetail },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
