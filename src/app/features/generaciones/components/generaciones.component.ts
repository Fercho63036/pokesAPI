import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-generaciones',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './generaciones.component.html',
})
export class GeneracionesComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
