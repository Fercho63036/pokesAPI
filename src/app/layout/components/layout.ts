import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppFooter } from "./footer/footer";
import { AppTopbar } from "./topbar/topbar";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, AppFooter, AppTopbar ],
    template:
    `
    <app-topbar></app-topbar>
    <h1>Este es un tipo</h1>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    `
})
export class AppLayout {
}