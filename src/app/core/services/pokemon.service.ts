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

  // Obtiene todos los Pokémon (905 total) para el autocompletado
  getPokemons(): Observable<Pokemon[]> {
    const url = `${this.URL_BASE}/pokemon?limit=905&offset=0`;
    return this.http.get<Pokemon[]>(url);
  }

  // Obtiene Pokémon con paginación (lazy loading / scroll infinito)
  getPokemonsLazy(offset: number, limit: number): Observable<Pokemon[]> {
    const url = `${this.URL_BASE}/pokemon?offset=${offset}&limit=${limit}`;
    return this.http.get<Pokemon[]>(url);
  }

  // Obtiene detalles completos de un Pokémon mediante su URL
  getPokeDetails(pokemonUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonUrl);
  }

  // Obtiene un Pokémon específico por su nombre
  getPokemon(pokemon: string): Observable<Pokemon> {
    const url = `${this.URL_BASE}/pokemon/${pokemon}`;
    return this.http.get<Pokemon>(url);
  }
}