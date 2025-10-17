import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-habilidades',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './habilidades.component.html',
})
export class HabilidadesComponent implements OnInit {

    ngOnInit(): void {
        console.log('Componente de habilidades');
    }
    
}
