// topbar/topbar.component.ts
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
  menuAbierto = signal(false);
  menuTemaAbierto = signal(false);

  alternarMenu(): void {
    this.menuAbierto.update(v => !v);
    this.menuTemaAbierto.set(false);
  }

  alternarMenuTema(): void {
    this.menuTemaAbierto.update(v => !v);
  }

  alternarTema(): void {
    this.servicioTema.alternarTema();
    this.menuTemaAbierto.set(false);
  }

  seleccionarTema(tema: 'claro' | 'oscuro' | 'sistema'): void {
    this.servicioTema.establecerPreferencia(tema);
    this.menuTemaAbierto.set(false);
  }

  cerrarMenus(): void {
    this.menuAbierto.set(false);
    this.menuTemaAbierto.set(false);
  }
}