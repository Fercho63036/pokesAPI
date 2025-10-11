import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-movimientos',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './movimientos.component.html',
})
export class MovmientosComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
