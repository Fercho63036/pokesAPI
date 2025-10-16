// services/tema.service.ts
import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Tema = 'claro' | 'oscuro' | 'sistema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser: boolean;
  
  // Signal para manejar el tema actual (true = oscuro, false = claro)
  temaOscuro = signal<boolean>(false);
  
  // Signal para la preferencia del usuario (incluye 'sistema')
  preferenciaUsuario = signal<Tema>('sistema');

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.inicializarTema();
      this.escucharCambiosSistema();
    }

    // Effect para aplicar cambios al DOM
    effect(() => {
      if (this.isBrowser) {
        this.aplicarTema(this.temaOscuro());
      }
    });
  }

  /**
   * Inicializa el tema desde localStorage o preferencia del sistema
   */
  private inicializarTema(): void {
    const preferenciaGuardada = localStorage.getItem('tema-preferencia') as Tema;
    
    if (preferenciaGuardada) {
      this.preferenciaUsuario.set(preferenciaGuardada);
      
      if (preferenciaGuardada === 'sistema') {
        this.aplicarPreferenciaSistema();
      } else {
        this.temaOscuro.set(preferenciaGuardada === 'oscuro');
      }
    } else {
      // Por defecto usar preferencia del sistema
      this.preferenciaUsuario.set('sistema');
      this.aplicarPreferenciaSistema();
    }
  }

  /**
   * Aplica la preferencia del sistema operativo
   */
  private aplicarPreferenciaSistema(): void {
    if (!this.isBrowser) return;
    
    const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.temaOscuro.set(prefiereOscuro);
  }

  /**
   * Escucha cambios en la preferencia del sistema
   */
  private escucharCambiosSistema(): void {
    if (!this.isBrowser) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      // Solo aplicar si el usuario tiene configurado 'sistema'
      if (this.preferenciaUsuario() === 'sistema') {
        this.temaOscuro.set(e.matches);
      }
    });
  }

  /**
   * Aplica el tema al DOM
   */
  private aplicarTema(oscuro: boolean): void {
    if (!this.isBrowser) return;

    const html = document.documentElement;
    
    if (oscuro) {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
  }

  /**
   * Alterna entre tema claro y oscuro
   */
  alternarTema(): void {
    const nuevoTema: Tema = this.temaOscuro() ? 'claro' : 'oscuro';
    this.establecerPreferencia(nuevoTema);
  }

  /**
   * Establece una preferencia específica de tema
   */
  establecerPreferencia(preferencia: Tema): void {
    this.preferenciaUsuario.set(preferencia);
    
    if (this.isBrowser) {
      localStorage.setItem('tema-preferencia', preferencia);
    }

    if (preferencia === 'sistema') {
      this.aplicarPreferenciaSistema();
    } else {
      this.temaOscuro.set(preferencia === 'oscuro');
    }
  }

  /**
   * Obtiene el nombre del tema actual para mostrar en UI
   */
  obtenerNombreTemaActual(): string {
    const preferencia = this.preferenciaUsuario();
    
    if (preferencia === 'sistema') {
      return this.temaOscuro() ? 'Sistema (Oscuro)' : 'Sistema (Claro)';
    }
    
    return preferencia === 'oscuro' ? 'Oscuro' : 'Claro';
  }
}