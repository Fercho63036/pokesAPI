import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaMovimiento, ClaseDañoMovimiento, DolenciaMovimiento, EstiloBatallaMovimiento, MetodoAprendizajeMovimiento, Movimiento, ObjetivoMovimiento } from '../models/interfaces/movimiento';
import { RecursoAPIConNombre } from '../models/interfaces/recurso-api-nombre';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
    private urlBase = 'https://pokeapi.co/api/v2';

    constructor(
        private http: HttpClient
    ) { }

    // Obtener un movimiento por ID o nombre
    obtenerMovimiento(idONombre: string | number): Observable<Movimiento> {
        return this.http.get<Movimiento>(`${this.urlBase}/move/${idONombre}/`);
    }

    // Obtener lista paginada de movimientos
    obtenerListaMovimientos(limite: number = 20, offset: number = 0): Observable<any> {
        return this.http.get(`${this.urlBase}/move?limit=${limite}&offset=${offset}`);
    }

    // Obtener dolencia de movimiento por ID o nombre
    obtenerDolenciaMovimiento(idONombre: string | number): Observable<DolenciaMovimiento> {
        return this.http.get<DolenciaMovimiento>(`${this.urlBase}/move-ailment/${idONombre}/`);
    }

    // Obtener estilo de batalla por ID o nombre
    obtenerEstiloBatalla(idONombre: string | number): Observable<EstiloBatallaMovimiento> {
        return this.http.get<EstiloBatallaMovimiento>(`${this.urlBase}/move-battle-style/${idONombre}/`);
    }

    // Obtener categoría de movimiento por ID o nombre
    obtenerCategoriaMovimiento(idONombre: string | number): Observable<CategoriaMovimiento> {
        return this.http.get<CategoriaMovimiento>(`${this.urlBase}/move-category/${idONombre}/`);
    }

    // Obtener clase de daño por ID o nombre
    obtenerClaseDaño(idONombre: string | number): Observable<ClaseDañoMovimiento> {
        return this.http.get<ClaseDañoMovimiento>(`${this.urlBase}/move-damage-class/${idONombre}/`);
    }

    // Obtener método de aprendizaje por ID o nombre
    obtenerMetodoAprendizaje(idONombre: string | number): Observable<MetodoAprendizajeMovimiento> {
        return this.http.get<MetodoAprendizajeMovimiento>(`${this.urlBase}/move-learn-method/${idONombre}/`);
    }

    // Obtener objetivo de movimiento por ID o nombre
    obtenerObjetivoMovimiento(idONombre: string | number): Observable<ObjetivoMovimiento> {
        return this.http.get<ObjetivoMovimiento>(`${this.urlBase}/move-target/${idONombre}/`);
    }

    // Método auxiliar para obtener descripción en español
    obtenerDescripcionEnEspañol(movimiento: Movimiento): string {
        const entradaEspañol = movimiento.effect_entries.find(
        entrada => entrada.language.name === 'es' || entrada.language.name === 'en'
        );
        return entradaEspañol ? entradaEspañol.short_effect : 'Sin descripción disponible';
    }

    // Método auxiliar para obtener nombre en español
    obtenerNombreEnEspañol(nombres: { name: string; language: RecursoAPIConNombre }[]): string {
        const nombreEspañol = nombres.find(
        n => n.language.name === 'es' || n.language.name === 'en'
        );
        return nombreEspañol ? nombreEspañol.name : 'Sin nombre';
    }
}