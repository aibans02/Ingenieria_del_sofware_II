import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumsComponent } from './forums/forums.component';
import { GameIndexComponent } from './game-index/game-index.component';
import { GuidesComponent } from './guides/guides.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { SupportComponent } from './support/support.component';
import { GameComponent } from './game.component';

const routes: Routes = [
  { path: ':id', component: GameComponent, children:[
    { path: '', redirectTo: 'game-index', pathMatch: 'full' }, 
    { path: 'forums', component: ForumsComponent },
    { path: 'game-index', component: GameIndexComponent },
    { path: 'guides', component: GuidesComponent },
    { path: 'news-updates', component: NewsUpdatesComponent },
    { path: 'support', component: SupportComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { } 
