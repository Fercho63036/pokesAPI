import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppFooter } from "./footer/footer";
import { AppTopbar } from "./topbar/topbar";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, AppFooter, AppTopbar ],
    templateUrl: './layout.html',
})
export class AppLayout {}