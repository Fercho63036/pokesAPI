import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AreaUbicacion } from '../models/interfaces/area-ubicacion';
import { RecursoAPIConNombre } from '../models/interfaces/recurso-api-nombre';
import { AreaPalPark } from '../models/interfaces/area-pal-park';
import { Region } from '../models/interfaces/region';
import { Nombre } from '../models/interfaces/nombre';
import { EncuentroPokemon } from '../models/interfaces/encuentro-pokemon';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
    private urlBase = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) { }

    // ========== ÁREAS DE UBICACIÓN ========== //

    obtenerAreaUbicacion(idONombre: string | number): Observable<AreaUbicacion> {
        return this.http.get<AreaUbicacion>(`${this.urlBase}/location-area/${idONombre}/`);
    }

    obtenerListaAreasUbicacion(limite: number = 20, offset: number = 0): Observable<{
        count: number;
        next: string | null;
        previous: string | null;
        results: RecursoAPIConNombre[];
    }> {
        return this.http.get<any>(`${this.urlBase}/location-area?limit=${limite}&offset=${offset}`);
    }

    // ========== ÁREAS DE PAL PARK ========== //
        
    obtenerAreaPalPark(idONombre: string | number): Observable<AreaPalPark> {
        return this.http.get<AreaPalPark>(`${this.urlBase}/pal-park-area/${idONombre}/`);
    }

    obtenerListaAreasPalPark(): Observable<{
        count: number;
        next: string | null;
        previous: string | null;
        results: RecursoAPIConNombre[];
    }> {
        return this.http.get<any>(`${this.urlBase}/pal-park-area`);
    }

    // ========== REGIONES ========== //

    obtenerRegion(idONombre: string | number): Observable<Region> {
        return this.http.get<Region>(`${this.urlBase}/region/${idONombre}/`);
    }

    obtenerListaRegiones(): Observable<{
        count: number;
        next: string | null;
        previous: string | null;
        results: RecursoAPIConNombre[];
    }> {
        return this.http.get<any>(`${this.urlBase}/region`);
    }

    // ========== MÉTODOS AUXILIARES ========== //
        
    obtenerNombreEnEspanol(nombres: Nombre[]): string {
        const nombreEs = nombres.find(n => n.language.name === 'es');
        return nombreEs?.name || nombres[0]?.name || '';
    }

    filtrarPorVersion(encuentros: EncuentroPokemon[], nombreVersion: string): EncuentroPokemon[] {
        return encuentros.map(encuentro => ({
        ...encuentro,
        version_details: encuentro.version_details.filter(
            detalle => detalle.version.name === nombreVersion
        )
        })).filter(encuentro => encuentro.version_details.length > 0);
    }
}