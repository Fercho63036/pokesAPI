import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tipos',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './tipos.component.html',
})
export class TiposComponent implements OnInit {

    ngOnInit(): void {
        console.log('Componente de tipos');
    }
    
}
