import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { CharacterFormComponent } from './character-form/character-form.component';
import { SpellListComponent }  from './spell-list/spell-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'character/:id',
    component: PlayerComponent
  },
  {
    path: 'character/add',
    component: CharacterFormComponent
  },
  {
    path: 'spell-list',
    component: SpellListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
