import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UbicacionService } from '../../../core/services/ubicacion.service';

@Component({
    selector: 'app-regiones',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './regiones.component.html',
})
export class RegionesComponent implements OnInit {

    private ubicacionServicio = inject(UbicacionService);
  
    ngOnInit(): void {
        this.obtenerlistaRegiones();
        this.obtenerInformacionRegion();
    }

    obtenerlistaRegiones(){
        this.ubicacionServicio.obtenerListaRegiones()
        .subscribe( respuesta => {
            console.log(respuesta);
        });
    }

    obtenerInformacionRegion(){
        this.ubicacionServicio.obtenerRegion('Kanto')
        .subscribe( region => {
            console.log(region);
        })
    }

}
