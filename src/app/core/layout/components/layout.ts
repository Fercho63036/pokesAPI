import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppTopbarComponent } from "./topbar/topbar.component";
import { AppFooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, AppFooterComponent, AppTopbarComponent],
    templateUrl: './layout.html',
})
export class AppLayout {}