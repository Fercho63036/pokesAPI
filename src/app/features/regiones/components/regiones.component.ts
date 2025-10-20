import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-regiones',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './regiones.component.html',
})
export class RegionesComponent implements OnInit {

    ngOnInit(): void {
        console.log('Componente de regiones');
    }    
}
