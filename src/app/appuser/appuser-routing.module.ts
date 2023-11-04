import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppuserComponent } from './appuser.component';
import { ProfileComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: AppuserComponent,
    children: [
      { path: '', redirectTo: 'profile' },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppuserRoutingModule { }