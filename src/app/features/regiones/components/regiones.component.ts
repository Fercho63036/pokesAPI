import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
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
    private cdr = inject(ChangeDetectorRef);

    ngOnInit(): void {
        this.obtenerlistaRegiones();
    }

    obtenerlistaRegiones(): void {
        this.ubicacionService.obtenerListaRegiones()
            .subscribe({
                next: (respuesta) => {
                    this.regiones = respuesta.results.map((region: any) => {
                        const nombreImagen = region.name
                            .toLowerCase()
                            .trim()
                            .replace(/\s+/g, '-');
                        return {
                            ...region,
                            image: `assets/images/locations/${nombreImagen}.png`
                        };
                    });
                    this.cdr.detectChanges();                    
                },
                error: (error) => {
                    console.error('Error al cargar regiones:', error);
                    this.cdr.detectChanges();
                }
            });
    }

    onImageError(event: any, regionName: string): void {
        if (event.target.src.includes('pokeApi.png')) {
            console.error('Imagen de fallback también falló');
            return;
        }        
        console.warn(`Error cargando imagen: ${regionName}`);
        event.target.src = 'assets/images/pokeApi.png';
    }
}