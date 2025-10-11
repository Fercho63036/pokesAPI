import { Routes } from '@angular/router';
import { PokemonListaComponent } from './components/pokemon-lista/pokemon-lista.component';

export const POKEDEX_ROUTES: Routes = [
  {
    path: '',
    component: PokemonListaComponent
  }
];