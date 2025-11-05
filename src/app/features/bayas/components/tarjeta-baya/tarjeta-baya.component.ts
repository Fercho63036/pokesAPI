// ============================================================================
// ARCHIVO: src/app/components/tarjeta-baya/tarjeta-baya.component.ts
// ============================================================================

/***************************** ANGULAR CORE **********************************/
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/***************************** RXJS ******************************************/
import { finalize } from 'rxjs';
import { Berry } from '../../../../core/models/interfaces/berry';
import { BerryService } from '../../../../core/services/berry.service';

/***************************** SERVICIOS *************************************/

/***************************** INTERFACES ************************************/

@Component({
    selector: 'app-tarjeta-baya',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tarjeta-baya.component.html'
})
export class TarjetaBayaComponent implements OnInit {

    /***************************** INPUTS ***************************************/
    @Input() idBaya!: number;
    @Input() nombreBaya!: string;

    /***************************** PROPIEDADES **********************************/
    baya: Berry | null = null;
    cargando: boolean = false;
    error: boolean = false;
    mostrarDetalles: boolean = false;

    /***************************** COLORES POR FIRMEZA **************************/
    coloresFirmeza: { [key: string]: string } = {
        'very-soft': 'bg-pink-100 text-pink-700',
        'soft': 'bg-purple-100 text-purple-700',
        'hard': 'bg-blue-100 text-blue-700',
        'very-hard': 'bg-indigo-100 text-indigo-700',
        'super-hard': 'bg-gray-100 text-gray-700'
    };

    constructor(private berryService: BerryService) {}

    /***************************** CICLO DE VIDA ********************************/
    ngOnInit(): void {
        this.cargarBaya();
    }

    /***************************** MÉTODOS PRINCIPALES **************************/

    /**
     * Carga los datos completos de la baya desde la API.
     */
    cargarBaya(): void {
        this.cargando = true;
        this.error = false;

        this.berryService.obtenerBerry(this.idBaya)
            .pipe(finalize(() => this.cargando = false))
            .subscribe({
                next: (datos) => {
                    this.baya = datos;
                },
                error: (err) => {
                    this.error = true;
                    console.error(`Error cargando baya ${this.idBaya}:`, err);
                }
            });
    }

    /**
     * Alterna la visualización de detalles adicionales.
     */
    toggleDetalles(): void {
        this.mostrarDetalles = !this.mostrarDetalles;
    }

    /***************************** MÉTODOS DE UTILIDAD **************************/

    /**
     * Obtiene el color de fondo según la firmeza de la baya.
     */
    obtenerColorFirmeza(): string {
        if (!this.baya?.firmeza?.name) return 'bg-gray-100 text-gray-700';
        return this.coloresFirmeza[this.baya.firmeza.name] || 'bg-gray-100 text-gray-700';
    }

    /**
     * Formatea el nombre de la baya para mostrar.
     */
    formatearNombre(nombre: string): string {
        return nombre.charAt(0).toUpperCase() + nombre.slice(1).replace('-', ' ');
    }

    /**
     * Obtiene la URL de la imagen de la baya desde recursos oficiales.
     */
    obtenerImagenBaya(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.nombreBaya}-berry.png`;
    }

    /**
     * Obtiene el emoji según el sabor predominante.
     */
    obtenerEmojiSabor(sabor: string): string {
        const emojis: { [key: string]: string } = {
            'spicy': '🌶️',
            'dry': '🏜️',
            'sweet': '🍬',
            'bitter': '☕',
            'sour': '🍋'
        };
        return emojis[sabor] || '🍓';
    }

    /**
     * Calcula el tiempo de crecimiento en horas.
     */
    calcularTiempoCrecimiento(): string {
        if (!this.baya?.tiempoCrecimiento) return 'N/A';
        const horas = this.baya.tiempoCrecimiento;
        if (horas < 24) return `${horas}h`;
        const dias = Math.floor(horas / 24);
        const horasRestantes = horas % 24;
        return horasRestantes > 0 ? `${dias}d ${horasRestantes}h` : `${dias}d`;
    }

    /**
     * Obtiene los sabores con potencia mayor a 0.
     */
    obtenerSaboresActivos(): any[] {
        if (!this.baya?.sabores) return [];
        return this.baya.sabores.filter(s => s.potencia > 0);
    }
}
