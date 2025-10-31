// berry.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Berry, FirmezaBerry, RespuestaAPIBerry, RespuestaAPIFirmezaBerry, RespuestaAPISaborBerry, SaborBerry } from '../models/interfaces/berry';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BerryService {
    URL_BASE = environment.apiUrl;

    constructor(private http: HttpClient) { }

    /**
     * Obtiene información de una berry por ID o nombre
     * @param idONombre ID numérico o nombre de la berry
     * @returns Observable con los datos de la berry
     */
    obtenerBerry(idONombre: string | number): Observable<Berry> {
        return new Observable(observador => {
        this.http.get<RespuestaAPIBerry>(`${this.URL_BASE}/berry/${idONombre}`)
            .subscribe({
            next: (respuesta) => {
                const berryTraducida: Berry = {
                id: respuesta.id,
                nombre: respuesta.name,
                tiempoCrecimiento: respuesta.growth_time,
                cosechaMaxima: respuesta.max_harvest,
                poderRegaloNatural: respuesta.natural_gift_power,
                tamaño: respuesta.size,
                suavidad: respuesta.smoothness,
                sequedadSuelo: respuesta.soil_dryness,
                firmeza: respuesta.firmness,
                sabores: respuesta.flavors.map(f => ({
                    potencia: f.potency,
                    sabor: f.flavor
                })),
                objeto: respuesta.item,
                tipoRegaloNatural: respuesta.natural_gift_type
                };
                observador.next(berryTraducida);
                observador.complete();
            },
            error: (error) => observador.error(error)
            });
        });
    }

    /**
     * Obtiene información de la firmeza de una berry por ID o nombre
     * @param idONombre ID numérico o nombre de la firmeza
     * @returns Observable con los datos de la firmeza
     */
    obtenerFirmezaBerry(idONombre: string | number): Observable<FirmezaBerry> {
        return new Observable(observador => {
        this.http.get<RespuestaAPIFirmezaBerry>(`${this.URL_BASE}/berry-firmness/${idONombre}`)
            .subscribe({
            next: (respuesta) => {
                const firmezaTraducida: FirmezaBerry = {
                id: respuesta.id,
                nombre: respuesta.name,
                berries: respuesta.berries,
                nombres: respuesta.names.map(n => ({
                    nombre: n.name,
                    idioma: n.language
                }))
                };
                observador.next(firmezaTraducida);
                observador.complete();
            },
            error: (error) => observador.error(error)
            });
        });
    }

    /**
     * Obtiene información de un sabor de berry por ID o nombre
     * @param idONombre ID numérico o nombre del sabor
     * @returns Observable con los datos del sabor
     */
    obtenerSaborBerry(idONombre: string | number): Observable<SaborBerry> {
        return new Observable(observador => {
        this.http.get<RespuestaAPISaborBerry>(`${this.URL_BASE}/berry-flavor/${idONombre}`)
            .subscribe({
            next: (respuesta) => {
                const saborTraducido: SaborBerry = {
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
                };
                observador.next(saborTraducido);
                observador.complete();
            },
            error: (error) => observador.error(error)
            });
        });
    }

    /**
     * Obtiene la lista de todas las berries disponibles
     * @param limite Número máximo de resultados (por defecto 100)
     * @param desplazamiento Desde qué posición empezar (por defecto 0)
     * @returns Observable con la lista de berries
     */
    obtenerListaBerries(limite: number = 100, desplazamiento: number = 0): Observable<any> {
        return this.http.get(`${this.URL_BASE}/berry?limit=${limite}&offset=${desplazamiento}`);
    }

    /**
     * Obtiene la lista de todas las firmezas disponibles
     * @returns Observable con la lista de firmezas
     */
    obtenerListaFirmezas(): Observable<any> {
        return this.http.get(`${this.URL_BASE}/berry-firmness`);
    }

    /**
     * Obtiene la lista de todos los sabores disponibles
     * @returns Observable con la lista de sabores
     */
    obtenerListaSabores(): Observable<any> {
        return this.http.get(`${this.URL_BASE}/berry-flavor`);
    }
}