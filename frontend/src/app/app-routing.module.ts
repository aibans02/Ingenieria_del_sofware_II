import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { IndexComponent } from './index/index.component';
import { ForumsComponent } from './forums/forums.component';
import { GuidesComponent } from './guides/guides.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { SupportComponent } from './support/support.component';
import { GameNavigatorComponent } from './game-navigator/game-navigator.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'game', component: GameComponent },
  { path: 'game-navigator', component: GameNavigatorComponent },
  { path: 'suport', component: SupportComponent },
  { path: 'news-updates', component: NewsUpdatesComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'forums', component: ForumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
