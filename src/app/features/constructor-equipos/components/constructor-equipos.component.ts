import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-con',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './constructor-equipos.component.html',
})
export class ConstructorEquiposComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
