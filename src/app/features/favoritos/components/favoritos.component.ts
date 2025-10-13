import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-favoritos',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './favoritos.component.html',
})
export class FavoritosComponent implements OnInit {

    ngOnInit(): void {
    }
    
}
