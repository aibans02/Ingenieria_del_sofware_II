import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration/administration.component'
import { AppIndexComponent } from './app-index/app-index.component';
import { ConfigurationComponent } from './configuration/configuration.component'

const routes: Routes = [
  { path: '', redirectTo: '/app-index', pathMatch: 'full' },
  { path: 'administration', component: AdministrationComponent },
  { path: 'app-index', component: AppIndexComponent },
  { path: 'configuration', component: ConfigurationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
