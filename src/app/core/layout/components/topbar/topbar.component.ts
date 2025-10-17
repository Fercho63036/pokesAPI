import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemaService } from '../../../../services/tema.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topbar.component.html',
})
export class AppTopbarComponent {
  servicioTema = inject(TemaService);
  menuTemaAbierto = signal(false);

  alternarMenuTema(): void {
    this.menuTemaAbierto.update(v => !v);
  }

  seleccionarTema(tema: 'claro' | 'oscuro' | 'sistema'): void {
    this.servicioTema.establecerPreferencia(tema);
    this.menuTemaAbierto.set(false);
  }

  cerrarMenus(): void {
    this.menuTemaAbierto.set(false);
  }
}