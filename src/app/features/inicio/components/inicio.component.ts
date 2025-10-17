import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inicio',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {

    ngOnInit(): void {
        console.log('Componente de inicio');
    }
    
}
