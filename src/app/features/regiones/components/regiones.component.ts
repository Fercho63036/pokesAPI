import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UbicacionService } from '../../../core/services/ubicacion.service';

interface Region {
    name: string;
    url: string;
    image: string;
}

@Component({
    selector: 'app-regiones',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './regiones.component.html',
})
export class RegionesComponent implements OnInit {

    regiones: Region[] = [];

    private ubicacionService = inject(UbicacionService);

    ngOnInit(): void {
        this.obtenerlistaRegiones();
    }

    obtenerlistaRegiones(): void {
        this.ubicacionService.obtenerListaRegiones()
            .subscribe({
                next: (respuesta) => {
                    this.regiones = respuesta.results.map((region: any) => ({
                        ...region,
                        image: `assets/images/locations/${region.name}.png`
                    }));
                    
                    console.log('Regiones cargadas:', this.regiones);
                },
                error: (error) => {
                    console.error('Error al cargar regiones:', error);
                    // Aquí podrías mostrar un mensaje al usuario
                }
            });
    }

    onImageError(event: any, regionName: string): void {
        console.error(`Error cargando imagen: ${regionName}`);
        // Imagen por defecto si falla
        event.target.src = 'assets/images/pokeApi.png';
    }

}