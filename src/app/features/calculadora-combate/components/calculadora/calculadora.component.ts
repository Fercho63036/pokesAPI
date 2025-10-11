import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calculadora',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
