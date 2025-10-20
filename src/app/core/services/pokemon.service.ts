import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pokemon } from '../models/interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  URL_BASE = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  // 1. Obtener lista completa de Pokémon (para autocompletado)
  getPokemons(): Observable<Pokemon[]> {
    const url = `${this.URL_BASE}/pokemon?limit=905&offset=0`;
    return this.http.get<Pokemon[]>(url);
  }

  // 2. Obtener Pokémon de forma paginada (scroll infinito)
  getPokemonsLazy(offset: number, limit: number): Observable<Pokemon[]> {
    const url = `${this.URL_BASE}/pokemon?offset=${offset}&limit=${limit}`;
    return this.http.get<Pokemon[]>(url);
  }

  // 3. Obtener detalles completos de un Pokémon por URL
  getPokeDetails(pokemonUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonUrl);
  }

  // 4. Obtener un Pokémon específico por nombre
  getPokemon(pokemon: string): Observable<Pokemon> {
    const url = `${this.URL_BASE}/pokemon/${pokemon}`;
    return this.http.get<Pokemon>(url);
  }
}