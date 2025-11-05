import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SquadreComponent } from './squadre/squadre';
import { GiocatoriComponent } from './giocatori/giocatori';
import { PartiteComponent } from './partite/partite';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'squadre', component: SquadreComponent },
  { path: 'giocatori', component: GiocatoriComponent },
  { path: 'partite', component: PartiteComponent }
];