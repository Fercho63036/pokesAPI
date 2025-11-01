/***************************** ANGULAR CORE **********************************/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/***************************** RXJS ******************************************/
import { Observable } from 'rxjs';
/***************************** INTERFACES ***********************************/
import { Pokemon } from '../models/interfaces/pokemon';
import { ListaPokemones } from '../models/interfaces/pokemon-all';
/***************************** CONFIGURACIÓN *********************************/
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    /***************************** PROPIEDADES ********************************/
    URL_BASE = environment.apiUrl;
    constructor(private http: HttpClient) {}
    /***************************** MÉTODOS PRINCIPALES *************************/

    /**
     * Obtiene la lista completa de Pokémon (para autocompletado)
     * @returns Observable con todos los Pokémon (limitado a 905)
     */
    obtenerPokemons(): Observable<ListaPokemones> {
        const url = `${this.URL_BASE}/pokemon?limit=905&offset=0`;
        return this.http.get<ListaPokemones>(url);
    }

    /**
     * Obtiene Pokémon de forma paginada (ideal para scroll infinito o carga por lotes)
     * @param desplazamiento - Índice de inicio (offset)
     * @param limite - Cantidad de Pokémon a obtener
     * @returns Observable con la lista de Pokémon en la página solicitada
     */
    obtenerPokemonsPaginados(desplazamiento: number, limite: number): Observable<Pokemon[]> {
        const url = `${this.URL_BASE}/pokemon?offset=${desplazamiento}&limit=${limite}`;
        return this.http.get<Pokemon[]>(url);
    }

    /**
     * Obtiene los detalles completos de un Pokémon a partir de su URL directa
     * @param urlPokemon - URL del Pokémon
     * @returns Observable con los datos detallados del Pokémon
     */
    obtenerDetallesPokemon(urlPokemon: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(urlPokemon);
    }

    /**
     * Obtiene un Pokémon específico por nombre o ID
     * @param pokemon - Nombre o ID del Pokémon
     * @returns Observable con la información del Pokémon
     */
    obtenerPokemon(pokemon: string): Observable<Pokemon> {
        const url = `${this.URL_BASE}/pokemon/${pokemon}`;
        return this.http.get<Pokemon>(url);
    }
}