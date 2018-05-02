import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent }      from './data/data.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DataDetailComponent }  from './data-detail/data-detail.component';
import { DataStatsComponent }  from './data-stats/data-stats.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DataDetailComponent },
  { path: 'data', component: DataComponent },
  { path: 'stats', component: DataStatsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }
