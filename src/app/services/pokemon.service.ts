import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../core/models/interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokeService {

    URL_BASE = environment.apiPoke;

    constructor(private http: HttpClient) { }

    getPokemons(): Observable<Pokemon[]> {
        const url =`${this.URL_BASE}/pokemon?limit=905&offset=0`;
        return this.http.get<Pokemon[]>(url);
    }

}