import { CommonModule } from '@angular/common';
import {Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './topbar.html',
})
export class AppTopbar {
    
}