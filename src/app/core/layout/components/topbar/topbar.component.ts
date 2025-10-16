import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemaService } from '../../../../services/tema.service';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './topbar.component.html',
})
export class AppTopbarComponent {
    temaService = inject(TemaService);

    alternarTema(): void {
        this.temaService.alternarTema();
    }
}