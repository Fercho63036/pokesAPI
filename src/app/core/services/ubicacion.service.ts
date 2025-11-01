/***************************** ANGULAR CORE **********************************/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/***************************** RXJS ******************************************/
import { Observable } from 'rxjs';
/***************************** INTERFACES ***********************************/
import { AreaUbicacion } from '../models/interfaces/area-ubicacion';
import { RecursoAPIConNombre } from '../models/interfaces/recurso-api-nombre';
import { AreaPalPark } from '../models/interfaces/area-pal-park';
import { Region } from '../models/interfaces/region';
import { Nombre } from '../models/interfaces/nombre';
import { EncuentroPokemon } from '../models/interfaces/encuentro-pokemon';
/***************************** CONFIGURACIÓN *********************************/
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UbicacionService {
    /***************************** PROPIEDADES ********************************/
    URL_BASE = environment.apiUrl;
    constructor(private http: HttpClient) {}
    /***************************** ÁREAS DE UBICACIÓN *************************/

    /**
     * Obtiene un área de ubicación por ID o nombre
     */
    obtenerAreaUbicacion(idONombre: string | number): Observable<AreaUbicacion> {
        return this.http.get<AreaUbicacion>(`${this.URL_BASE}/location-area/${idONombre}/`);
    }

    /**
     * Obtiene lista paginada de áreas de ubicación
     */
    obtenerListaAreasUbicacion(
        limite: number = 20,
        offset: number = 0
    ): Observable<{
        count: number;
        next: string | null;
        previous: string | null;
        results: RecursoAPIConNombre[];
    }> {
        return this.http.get<any>(`${this.URL_BASE}/location-area?limit=${limite}&offset=${offset}`);
    }

    /***************************** ÁREAS PAL PARK *****************************/

    /**
     * Obtiene un área de Pal Park por ID o nombre
     */
    obtenerAreaPalPark(idONombre: string | number): Observable<AreaPalPark> {
        return this.http.get<AreaPalPark>(`${this.URL_BASE}/pal-park-area/${idONombre}/`);
    }

    /**
     * Obtiene la lista de todas las áreas de Pal Park
     */
    obtenerListaAreasPalPark(): Observable<{
        count: number;
        next: string | null;
        previous: string | null;
        results: RecursoAPIConNombre[];
    }> {
        return this.http.get<any>(`${this.URL_BASE}/pal-park-area`);
    }

    /***************************** REGIONES ***********************************/

    /**
     * Obtiene una región específica por ID o nombre
     */
    obtenerRegion(idONombre: string | number): Observable<Region> {
        return this.http.get<Region>(`${this.URL_BASE}/region/${idONombre}/`);
    }

    /**
     * Obtiene la lista completa de regiones
     */
    obtenerListaRegiones(): Observable<{
        count: number;
        next: string | null;
        previous: string | null;
        results: RecursoAPIConNombre[];
    }> {
        return this.http.get<any>(`${this.URL_BASE}/region`);
    }

    /***************************** MÉTODOS AUXILIARES *************************/

    /**
     * Obtiene el nombre en español, o devuelve el primero disponible si no existe traducción
     */
    obtenerNombreEnEspanol(nombres: Nombre[]): string {
        const nombreEs = nombres.find(n => n.language.name === 'es');
        return nombreEs?.name || nombres[0]?.name || '';
    }

    /**
     * Filtra encuentros Pokémon según la versión indicada
     */
    filtrarPorVersion(encuentros: EncuentroPokemon[], nombreVersion: string): EncuentroPokemon[] {
        return encuentros
            .map(encuentro => ({
                ...encuentro,
                version_details: encuentro.version_details.filter(
                    detalle => detalle.version.name === nombreVersion
                )
            }))
            .filter(encuentro => encuentro.version_details.length > 0);
    }
}