// src/app/core/services/berry.service.ts

/***************************** ANGULAR CORE **********************************/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/***************************** RXJS ******************************************/
import { Observable, map } from 'rxjs';

/***************************** INTERFACES ***********************************/
import {
    Berry,
    FirmezaBerry,
    RespuestaAPIBerry,
    RespuestaAPIFirmezaBerry,
    RespuestaAPISaborBerry,
    SaborBerry
} from '../models/interfaces/berry';

/***************************** CONFIGURACIÓN *********************************/
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BerryService {

    /***************************** PROPIEDADES ********************************/
    URL_BASE = environment.apiUrl;

    constructor(private http: HttpClient) {}

    /***************************** MÉTODOS PRINCIPALES *************************/

/**
 * Obtiene información detallada de una berry por su ID o nombre.
 * @param idONombre ID numérico o nombre de la berry.
 * @returns Observable con los datos traducidos de la berry.
 */
obtenerBerry(idONombre: string | number): Observable<Berry> {
    return this.http.get<RespuestaAPIBerry>(`${this.URL_BASE}/berry/${idONombre}`).pipe(
        map(respuesta => ({
            id: respuesta.id,
            nombre: respuesta.name,
            tiempoCrecimiento: respuesta.growth_time,
            cosechaMaxima: respuesta.max_harvest,
            poderRegaloNatural: respuesta.natural_gift_power,
            tamano: respuesta.size,  // ✅ Cambiado de tamaño a tamano
            suavidad: respuesta.smoothness,
            sequedadSuelo: respuesta.soil_dryness,
            firmeza: respuesta.firmness,
            sabores: respuesta.flavors.map(f => ({
                potencia: f.potency,
                sabor: f.flavor
            })),
            objeto: respuesta.item,
            tipoRegaloNatural: respuesta.natural_gift_type
        }))
    );
}

    /**
     * Obtiene información de la firmeza de una berry por ID o nombre.
     * @param idONombre ID numérico o nombre de la firmeza.
     * @returns Observable con los datos traducidos de la firmeza.
     */
    obtenerFirmezaBerry(idONombre: string | number): Observable<FirmezaBerry> {
        return this.http.get<RespuestaAPIFirmezaBerry>(`${this.URL_BASE}/berry-firmness/${idONombre}`).pipe(
            map(respuesta => ({
                id: respuesta.id,
                nombre: respuesta.name,
                berries: respuesta.berries,
                nombres: respuesta.names.map(n => ({
                    nombre: n.name,
                    idioma: n.language
                }))
            }))
        );
    }

    /**
     * Obtiene información de un sabor de berry por ID o nombre.
     * @param idONombre ID numérico o nombre del sabor.
     * @returns Observable con los datos traducidos del sabor.
     */
    obtenerSaborBerry(idONombre: string | number): Observable<SaborBerry> {
        return this.http.get<RespuestaAPISaborBerry>(`${this.URL_BASE}/berry-flavor/${idONombre}`).pipe(
            map(respuesta => ({
                id: respuesta.id,
                nombre: respuesta.name,
                berries: respuesta.berries.map(b => ({
                    potencia: b.potency,
                    berry: b.berry
                })),
                tipoContest: respuesta.contest_type,
                nombres: respuesta.names.map(n => ({
                    nombre: n.name,
                    idioma: n.language
                }))
            }))
        );
    }

    /***************************** LISTAS Y COLECCIONES *************************/

    /**
     * Obtiene la lista paginada de todas las berries disponibles.
     * @param limite Número máximo de resultados (por defecto 100).
     * @param desplazamiento Posición inicial (por defecto 0).
     * @returns Observable con la lista de berries.
     */
    obtenerListaBerries(limite: number = 100, desplazamiento: number = 0): Observable<any> {
        return this.http.get(`${this.URL_BASE}/berry?limit=${limite}&offset=${desplazamiento}`);
    }

    /**
     * Obtiene la lista completa de firmezas de berries.
     * @returns Observable con todas las firmezas disponibles.
     */
    obtenerListaFirmezas(): Observable<any> {
        return this.http.get(`${this.URL_BASE}/berry-firmness`);
    }

    /**
     * Obtiene la lista completa de sabores de berries.
     * @returns Observable con todos los sabores disponibles.
     */
    obtenerListaSabores(): Observable<any> {
        return this.http.get(`${this.URL_BASE}/berry-flavor`);
    }
}
