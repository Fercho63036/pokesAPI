import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VisorCadenasComponent } from '../visor cadenas/visor-cadenas.component';
import { NodoEvolucionComponent } from '../nodo-evolucion/nodo-evolucion.component';

@Component({
    selector: 'app-arbol-evolutivo',
    standalone: true,
    imports: [
        CommonModule,
        VisorCadenasComponent,
        NodoEvolucionComponent
    ],
    templateUrl: './arbol-evolutivo.component.html',
})
export class ArbolEvolutivoComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
