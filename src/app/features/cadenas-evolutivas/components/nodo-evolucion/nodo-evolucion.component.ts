import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nodo-evolucion',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './nodo-evolucion.component.html',
})
export class NodoEvolucionComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
