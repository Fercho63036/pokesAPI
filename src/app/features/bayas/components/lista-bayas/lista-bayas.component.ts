// ============================================================================
// ARCHIVO: src/app/components/lista-bayas/lista-bayas.component.ts
// ============================================================================

/***************************** ANGULAR CORE **********************************/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/***************************** RXJS ******************************************/
import { finalize } from 'rxjs';

/***************************** SERVICIOS *************************************/
import { BerryService } from '../../../../core/services/berry.service';

/***************************** COMPONENTES ***********************************/
import { TarjetaBayaComponent } from '../tarjeta-baya/tarjeta-baya.component';

/***************************** INTERFACES ************************************/
interface BayaLista {
    nombre: string;
    url: string;
}

interface RespuestaListaBayas {
    count: number;
    next: string | null;
    previous: string | null;
    results: BayaLista[];
}

@Component({
    selector: 'app-lista-bayas',
    standalone: true,
    imports: [CommonModule, TarjetaBayaComponent],
    templateUrl: './lista-bayas.component.html'
})
export class ListaBayasComponent implements OnInit {

    /***************************** PROPIEDADES **********************************/
    bayas: BayaLista[] = [];
    bayasCargadas: number = 0;
    totalBayas: number = 0;
    cargando: boolean = false;
    error: string | null = null;
    limite: number = 20;
    desplazamiento: number = 0;

    constructor(private berryService: BerryService) {}

    /***************************** CICLO DE VIDA ********************************/
    ngOnInit(): void {
        this.cargarBayas();
    }

    /***************************** MÉTODOS PRINCIPALES **************************/

    /**
     * Carga la lista inicial de bayas desde la API.
     */
    cargarBayas(): void {
        if (this.cargando) return;

        this.cargando = true;
        this.error = null;

        this.berryService.obtenerListaBerries(this.limite, this.desplazamiento)
            .pipe(finalize(() => this.cargando = false))
            .subscribe({
                next: (respuesta: RespuestaListaBayas) => {
                    this.bayas = [...this.bayas, ...respuesta.results];
                    this.totalBayas = respuesta.count;
                    this.bayasCargadas = this.bayas.length;
                    this.desplazamiento += this.limite;
                },
                error: (err) => {
                    this.error = 'Error al cargar las bayas. Por favor, intenta nuevamente.';
                    console.error('Error cargando bayas:', err);
                }
            });
    }

    /**
     * Carga más bayas cuando el usuario hace scroll o presiona el botón.
     */
    cargarMasBayas(): void {
        if (this.bayasCargadas < this.totalBayas) {
            this.cargarBayas();
        }
    }

    /**
     * Verifica si hay más bayas disponibles para cargar.
     */
    hayMasBayas(): boolean {
        return this.bayasCargadas < this.totalBayas;
    }

    /**
     * Extrae el ID de la baya desde su URL.
     */
    extraerIdBaya(url: string): number {
        const partes = url.split('/').filter(p => p);
        return parseInt(partes[partes.length - 1], 10);
    }

    /**
     * Reinicia la lista de bayas.
     */
    reiniciar(): void {
        this.bayas = [];
        this.bayasCargadas = 0;
        this.desplazamiento = 0;
        this.error = null;
        this.cargarBayas();
    }
}
