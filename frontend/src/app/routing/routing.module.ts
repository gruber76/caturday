import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatComponent } from '../cat/cat.component';
import { NavigationComponent } from '../navigation/navigation.component';

import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'cat/:catId', component: CatComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
