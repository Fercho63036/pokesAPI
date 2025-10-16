import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser: boolean;
  
  // Signal para manejar el tema actual
  temaOscuro = signal<boolean>(false);

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      // Verificar preferencia guardada o preferencia del sistema
      const temaGuardado = localStorage.getItem('tema');
      
      if (temaGuardado) {
        this.temaOscuro.set(temaGuardado === 'oscuro');
      } else {
        // Detectar preferencia del sistema
        const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.temaOscuro.set(prefiereOscuro);
      }
    }

    // Effect para aplicar cambios al DOM
    effect(() => {
      if (this.isBrowser) {
        if (this.temaOscuro()) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('tema', 'oscuro');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('tema', 'claro');
        }
      }
    });
  }

  // Método para alternar el tema
  alternarTema(): void {
    this.temaOscuro.update(valor => !valor);
  }

  // Método para establecer un tema específico
  establecerTema(oscuro: boolean): void {
    this.temaOscuro.set(oscuro);
  }
}