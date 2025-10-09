import { CommonModule } from '@angular/common';
import {Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-encabezado',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './encabezado.html',
})
export class AppEncabezado {
    
}