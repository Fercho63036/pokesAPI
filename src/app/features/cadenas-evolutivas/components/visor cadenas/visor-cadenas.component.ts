import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-visor-cadenas',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './visor-cadenas.component.html',
})
export class VisorCadenasComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
