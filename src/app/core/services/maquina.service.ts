import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maquina, RespuestaListaMaquinas } from '../models/interfaces/maquina';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MaquinaService {
    
    URL_BASE = environment.apiUrl;

    constructor(private http: HttpClient) {}

    /**
     * Obtiene una máquina específica por ID
     * @param id - ID de la máquina
     * @returns Observable con los datos de la máquina
     */
    obtenerMaquina(id: number): Observable<Maquina> {
        return this.http.get<Maquina>(`${this.URL_BASE}/machine/${id}`);
    }

    /**
     * Obtiene la lista de todas las máquinas disponibles
     * @param limite - Número de resultados por página (opcional)
     * @param desplazamiento - Desplazamiento para paginación (opcional)
     * @returns Observable con la lista de máquinas
     */
    obtenerMaquinas(limite?: number, desplazamiento?: number): Observable<RespuestaListaMaquinas> {
        let url = this.URL_BASE;
        const parametros: string[] = [];
        
        if (limite !== undefined) {
        parametros.push(`limit=${limite}`);
        }
        if (desplazamiento !== undefined) {
        parametros.push(`offset=${desplazamiento}`);
        }
        
        if (parametros.length > 0) {
        url += `?${parametros.join('&')}`;
        }
        
        return this.http.get<RespuestaListaMaquinas>(url);
    }

    /**
     * Obtiene una máquina por el nombre del ítem (ej: "tm01")
     * @param nombreItem - Nombre del ítem TM o HM
     * @returns Observable con los datos de la máquina
     */
    obtenerMaquinaPorNombreItem(nombreItem: string): Observable<Maquina> {
        return this.http.get<Maquina>(`${this.URL_BASE}/machine/${nombreItem}`);
    }
}