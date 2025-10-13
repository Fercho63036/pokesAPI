import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ubicaciones',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './ubicaciones.component.html',
})
export class UbicacionesComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
