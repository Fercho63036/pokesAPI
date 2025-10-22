import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pokemon } from '../models/interfaces/pokemon';
import { ListaPokemones } from '../models/interfaces/pokemon-all';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  URL_BASE = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  // Obtener lista completa de Pokémon (para autocompletado)
  obtenerPokemons(): Observable<ListaPokemones> {
    const url = `${this.URL_BASE}/pokemon?limit=905&offset=0`;
    return this.http.get<ListaPokemones>(url);
  }

  // Obtener Pokémon de forma paginada (scroll infinito)
  obtenerPokemonsPaginados(desplazamiento: number, limite: number): Observable<Pokemon[]> {
    const url = `${this.URL_BASE}/pokemon?offset=${desplazamiento}&limit=${limite}`;
    return this.http.get<Pokemon[]>(url);
  }

  // Obtener detalles completos de un Pokémon por URL
  obtenerDetallesPokemon(urlPokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(urlPokemon);
  }

  // Obtener un Pokémon específico por nombre
  obtenerPokemon(pokemon: string): Observable<Pokemon> {
    const url = `${this.URL_BASE}/pokemon/${pokemon}`;
    return this.http.get<Pokemon>(url);
  }
}