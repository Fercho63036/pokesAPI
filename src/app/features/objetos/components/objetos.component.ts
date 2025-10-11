import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-objetos',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './objetos.component.html',
})
export class ObjetosComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
