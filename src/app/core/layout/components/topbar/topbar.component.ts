import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topbar.component.html',
})
export class AppTopbarComponent {
  temaOscuro = signal(false);

  alternarTema(): void {
    this.temaOscuro.update(v => !v);
    // Aquí puedes agregar la lógica para cambiar el tema en el futuro
  }
}