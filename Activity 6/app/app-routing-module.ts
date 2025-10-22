import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Meditations } from './meditations/meditations';
import { Taoteching } from './taoteching/taoteching';

const routes: Routes = [
  { path: '', redirectTo: 'meditations', pathMatch: 'full' },
  { path: 'meditations', component: Meditations },
  { path: 'taoteching', component: Taoteching }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
