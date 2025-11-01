/***************************** ANGULAR CORE **********************************/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/***************************** RXJS ******************************************/
import { Observable } from 'rxjs';
/***************************** INTERFACES ***********************************/
import { Movimiento, DolenciaMovimiento, EstiloBatallaMovimiento, CategoriaMovimiento, ClaseDañoMovimiento, MetodoAprendizajeMovimiento, ObjetivoMovimiento } from '../models/interfaces/movimiento';
import { RecursoAPIConNombre } from '../models/interfaces/recurso-api-nombre';
/***************************** CONFIGURACIÓN *********************************/
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MovimientosService {

    URL_BASE = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    /***************************** MÉTODOS PRINCIPALES *************************/

    // Obtener un movimiento por ID o nombre
    obtenerMovimiento(idONombre: string | number): Observable<Movimiento> {
        return this.http.get<Movimiento>(`${this.URL_BASE}/move/${idONombre}/`);
    }

    // Obtener lista paginada de movimientos
    obtenerListaMovimientos(limite: number = 20, offset: number = 0): Observable<any> {
        return this.http.get(`${this.URL_BASE}/move?limit=${limite}&offset=${offset}`);
    }

    // Obtener dolencia de movimiento por ID o nombre
    obtenerDolenciaMovimiento(idONombre: string | number): Observable<DolenciaMovimiento> {
        return this.http.get<DolenciaMovimiento>(`${this.URL_BASE}/move-ailment/${idONombre}/`);
    }

    // Obtener estilo de batalla por ID o nombre
    obtenerEstiloBatalla(idONombre: string | number): Observable<EstiloBatallaMovimiento> {
        return this.http.get<EstiloBatallaMovimiento>(`${this.URL_BASE}/move-battle-style/${idONombre}/`);
    }

    // Obtener categoría de movimiento por ID o nombre
    obtenerCategoriaMovimiento(idONombre: string | number): Observable<CategoriaMovimiento> {
        return this.http.get<CategoriaMovimiento>(`${this.URL_BASE}/move-category/${idONombre}/`);
    }

    // Obtener clase de daño por ID o nombre
    obtenerClaseDaño(idONombre: string | number): Observable<ClaseDañoMovimiento> {
        return this.http.get<ClaseDañoMovimiento>(`${this.URL_BASE}/move-damage-class/${idONombre}/`);
    }

    // Obtener método de aprendizaje por ID o nombre
    obtenerMetodoAprendizaje(idONombre: string | number): Observable<MetodoAprendizajeMovimiento> {
        return this.http.get<MetodoAprendizajeMovimiento>(`${this.URL_BASE}/move-learn-method/${idONombre}/`);
    }

    // Obtener objetivo de movimiento por ID o nombre
    obtenerObjetivoMovimiento(idONombre: string | number): Observable<ObjetivoMovimiento> {
        return this.http.get<ObjetivoMovimiento>(`${this.URL_BASE}/move-target/${idONombre}/`);
    }

    /***************************** MÉTODOS AUXILIARES **************************/

    // Obtener descripción en español o inglés
    obtenerDescripcionEnEspañol(movimiento: Movimiento): string {
        const entradaEspañol = movimiento.effect_entries.find(
            entrada => entrada.language.name === 'es' || entrada.language.name === 'en'
        );
        return entradaEspañol ? entradaEspañol.short_effect : 'Sin descripción disponible';
    }

    // Obtener nombre en español o inglés
    obtenerNombreEnEspañol(nombres: { name: string; language: RecursoAPIConNombre }[]): string {
        const nombreEspañol = nombres.find(
            n => n.language.name === 'es' || n.language.name === 'en'
        );
        return nombreEspañol ? nombreEspañol.name : 'Sin nombre';
    }
}
