import { CommonModule } from "@angular/common";
import { Component, OnDestroy } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, RouterLink ],
    template:
    `
    <h1>Este es un tipo</h1>
    `
})
export class AppLayout implements OnDestroy {
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

}