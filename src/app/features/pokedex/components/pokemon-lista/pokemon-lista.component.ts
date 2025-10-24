/***************************** ANGULAR CORE *****************************/
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
/***************************** SERVICIOS ********************************/
import { PokemonService } from '../../../../core/services/pokemon.service';
/***************************** MODELOS E INTERFACES *********************/
import { Pokemon } from '../../../../core/models/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-lista.component.html',
})
export class PokemonListaComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private pokemonServicio = inject(PokemonService);
  
  listaPokemon: Pokemon[] = [];
  pokemonFiltrados: Pokemon[] = [];
  cargando = false;
  busqueda = '';
  pokemonSeleccionado: Pokemon | null = null;
  
  // Paginación
  paginaActual = 1;
  pokemonPorPagina = 20;
  totalPaginas = 0;
  pokemonPaginados: Pokemon[] = [];
  totalPokemonDisponibles = 1025;

  // Mapeo de colores por tipo con gradientes vibrantes
  coloresTipo: { [key: string]: string } = {
    normal: 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600',
    fire: 'bg-gradient-to-br from-orange-400 via-red-500 to-red-600',
    water: 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600',
    electric: 'bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500',
    grass: 'bg-gradient-to-br from-green-400 via-green-500 to-emerald-600',
    ice: 'bg-gradient-to-br from-cyan-300 via-blue-400 to-cyan-500',
    fighting: 'bg-gradient-to-br from-red-600 via-red-700 to-orange-700',
    poison: 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600',
    ground: 'bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-600',
    flying: 'bg-gradient-to-br from-indigo-300 via-indigo-400 to-blue-500',
    psychic: 'bg-gradient-to-br from-pink-400 via-pink-500 to-fuchsia-600',
    bug: 'bg-gradient-to-br from-lime-400 via-green-500 to-green-600',
    rock: 'bg-gradient-to-br from-yellow-700 via-amber-700 to-stone-700',
    ghost: 'bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800',
    dragon: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800',
    dark: 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900',
    steel: 'bg-gradient-to-br from-slate-400 via-gray-500 to-slate-600',
    fairy: 'bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400'
  };

  // Colores para badges de tipos (más saturados y con mejor contraste)
  coloresBadgeTipo: { [key: string]: string } = {
    normal: 'bg-gray-500 text-white shadow-lg shadow-gray-500/50',
    fire: 'bg-red-500 text-white shadow-lg shadow-red-500/50',
    water: 'bg-blue-500 text-white shadow-lg shadow-blue-500/50',
    electric: 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/50',
    grass: 'bg-green-500 text-white shadow-lg shadow-green-500/50',
    ice: 'bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/50',
    fighting: 'bg-red-700 text-white shadow-lg shadow-red-700/50',
    poison: 'bg-purple-500 text-white shadow-lg shadow-purple-500/50',
    ground: 'bg-amber-600 text-white shadow-lg shadow-amber-600/50',
    flying: 'bg-indigo-400 text-white shadow-lg shadow-indigo-400/50',
    psychic: 'bg-pink-500 text-white shadow-lg shadow-pink-500/50',
    bug: 'bg-green-500 text-white shadow-lg shadow-green-500/50',
    rock: 'bg-amber-700 text-white shadow-lg shadow-amber-700/50',
    ghost: 'bg-purple-700 text-white shadow-lg shadow-purple-700/50',
    dragon: 'bg-indigo-700 text-white shadow-lg shadow-indigo-700/50',
    dark: 'bg-gray-800 text-white shadow-lg shadow-gray-800/50',
    steel: 'bg-slate-500 text-white shadow-lg shadow-slate-500/50',
    fairy: 'bg-pink-400 text-white shadow-lg shadow-pink-400/50'
  };

  ngOnInit(): void {
    this.cargarPokemonInicial();
  }

  cargarPokemonInicial(): void {
    this.cargando = true;
    const cantidadInicial = 1025; // Aumentado a 200 para cargar más desde el inicio
    
    this.pokemonServicio.obtenerPokemonsPaginados(0, cantidadInicial)
      .subscribe({
        next: (data: any) => {
          const promesas = data.results.map((item: any) => 
            this.pokemonServicio.obtenerDetallesPokemon(item.url).toPromise()
          );

          Promise.all(promesas).then((detalles: any[]) => {
            this.listaPokemon = detalles.filter(p => p !== null && p !== undefined);
            this.pokemonFiltrados = [...this.listaPokemon];
            this.calcularPaginacion();
            this.actualizarPaginaActual();
            this.cargando = false;
            
          }).catch((error) => {
            console.error('Error al cargar Pokémon:', error);
            this.cargando = false;
          });
        },
        error: (error) => {
          console.error('Error en la petición:', error);
          this.cargando = false;
        }
      });
  }

  cargarMasPokemon(desdeId: number, cantidad: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cargando = true;
      
      this.pokemonServicio.obtenerPokemonsPaginados(desdeId, cantidad)
        .subscribe({
          next: (data: any) => {
            const promesas = data.results.map((item: any) => 
              this.pokemonServicio.obtenerDetallesPokemon(item.url).toPromise()
            );

            Promise.all(promesas).then((detalles: any[]) => {
              const nuevosPokemon = detalles.filter(p => p !== null && p !== undefined);
              
              nuevosPokemon.forEach(pokemon => {
                if (!this.listaPokemon.find(p => p.id === pokemon.id)) {
                  this.listaPokemon.push(pokemon);
                }
              });
              
              this.listaPokemon.sort((a, b) => a.id - b.id);
              
              if (this.busqueda === '') {
                this.pokemonFiltrados = [...this.listaPokemon];
              }
              
              this.calcularPaginacion();
              this.actualizarPaginaActual();
              this.cargando = false;
              resolve();
            }).catch((error) => {
              console.error('Error al cargar más Pokémon:', error);
              this.cargando = false;
              reject(error);
            });
          },
          error: (error) => {
            console.error('Error en la petición:', error);
            this.cargando = false;
            reject(error);
          }
        });
    });
  }

  calcularPaginacion(): void {
    // Si no hay búsqueda, usar el total disponible en la API
    if (this.busqueda === '') {
      this.totalPaginas = Math.ceil(this.totalPokemonDisponibles / this.pokemonPorPagina);
    } else {
      // Si hay búsqueda, usar solo los filtrados
      this.totalPaginas = Math.ceil(this.pokemonFiltrados.length / this.pokemonPorPagina);
    }
  }

  actualizarPaginaActual(): void {
    const inicio = (this.paginaActual - 1) * this.pokemonPorPagina;
    const fin = inicio + this.pokemonPorPagina;
    this.pokemonPaginados = this.pokemonFiltrados.slice(inicio, fin);
    
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  async cambiarPagina(pagina: number): Promise<void> {
    if (pagina < 1 || pagina > this.totalPaginas) {
      return;
    }

    this.paginaActual = pagina;
    
    // Si hay búsqueda activa, solo actualizar la vista
    if (this.busqueda !== '') {
      this.actualizarPaginaActual();
      return;
    }

    // Calcular el índice del último Pokémon que necesitamos para esta página
    const ultimoIndiceNecesario = pagina * this.pokemonPorPagina;
    
    // Si no tenemos suficientes Pokémon cargados
    if (this.listaPokemon.length < ultimoIndiceNecesario && 
        this.listaPokemon.length < this.totalPokemonDisponibles) {
      
      const pokemonFaltantes = ultimoIndiceNecesario - this.listaPokemon.length;
      const offset = this.listaPokemon.length; // El offset es la cantidad actual de Pokémon
      
      // Cargar al menos lo que falta + un buffer adicional
      const cantidadACargar = Math.min(
        Math.max(pokemonFaltantes, 100), // Cargar mínimo 100 para tener buffer
        this.totalPokemonDisponibles - this.listaPokemon.length
      );
      
      try {
        await this.cargarMasPokemon(offset, cantidadACargar);
      } catch (error) {
        console.error('Error al cargar Pokémon para la página:', error);
        this.actualizarPaginaActual(); // Mostrar lo que tenemos aunque haya error
      }
    } else {
      this.actualizarPaginaActual();
    }
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.cambiarPagina(this.paginaActual - 1);
    }
  }

  paginaSiguiente(): void {
    if (this.paginaActual < this.totalPaginas) {
      this.cambiarPagina(this.paginaActual + 1);
    }
  }

  obtenerPaginasVisibles(): number[] {
    const paginas: number[] = [];
    const rango = 2;
    
    let inicio = Math.max(1, this.paginaActual - rango);
    let fin = Math.min(this.totalPaginas, this.paginaActual + rango);

    if (this.paginaActual <= rango) {
      fin = Math.min(this.totalPaginas, rango * 2 + 1);
    }
    if (this.paginaActual >= this.totalPaginas - rango) {
      inicio = Math.max(1, this.totalPaginas - (rango * 2));
    }

    for (let i = inicio; i <= fin; i++) {
      paginas.push(i);
    }

    return paginas;
  }

  obtenerRangoActual(): string {
    if (this.pokemonFiltrados.length === 0) {
      return '0-0';
    }
    
    const inicio = (this.paginaActual - 1) * this.pokemonPorPagina + 1;
    
    // Si estamos en modo sin búsqueda, el fin se calcula con el total disponible
    let fin: number;
    if (this.busqueda === '') {
      fin = Math.min(
        this.paginaActual * this.pokemonPorPagina, 
        this.totalPokemonDisponibles
      );
    } else {
      fin = Math.min(
        this.paginaActual * this.pokemonPorPagina, 
        this.pokemonFiltrados.length
      );
    }
    
    return `${inicio}-${fin}`;
  }

  buscarPokemon(evento: Event): void {
    const termino = (evento.target as HTMLInputElement).value.toLowerCase();
    this.busqueda = termino;

    if (termino === '') {
      this.pokemonFiltrados = [...this.listaPokemon];
    } else {
      this.pokemonFiltrados = this.listaPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(termino) ||
        pokemon.id.toString().includes(termino)
      );
    }

    this.paginaActual = 1;
    this.calcularPaginacion();
    this.actualizarPaginaActual();
  }

  abrirDetalle(pokemon: Pokemon): void {
    this.pokemonSeleccionado = pokemon;
  }

  cerrarDetalle(evento?: MouseEvent): void {
    if (evento) {
      if (evento.target === evento.currentTarget) {
        this.pokemonSeleccionado = null;
      }
    } else {
      this.pokemonSeleccionado = null;
    }
  }

  obtenerColorTipo(tipo: string): string {
    return this.coloresTipo[tipo] || 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600';
  }

  obtenerColorBadgeTipo(tipo: string): string {
    return this.coloresBadgeTipo[tipo] || 'bg-gray-500 text-white shadow-lg shadow-gray-500/50';
  }

  formatearId(id: number): string {
    return '#' + id.toString().padStart(3, '0');
  }

  obtenerSprite(pokemon: Pokemon): string {
    return (pokemon.sprites as any)?.other?.['official-artwork']?.front_default || pokemon.sprites.front_default;
  }

  obtenerTipos(pokemon: Pokemon): string[] {
    if (!pokemon.types || pokemon.types.length === 0) return [];
    return pokemon.types.map(t => t?.type?.name).filter(n => n);
  }

  tienetipos(pokemon: Pokemon): boolean {
    const tiene = pokemon?.types && Array.isArray(pokemon.types) && pokemon.types.length > 0;
    return tiene;
  }

  obtenerNombreTipo(tipo: any): string {
    return tipo?.type?.name || 'unknown';
  }

  obtenerPrimerTipo(pokemon: Pokemon | null): string {
    if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
      return 'normal';
    }
    return pokemon.types[0]?.type?.name || 'normal';
  }

  obtenerEstadisticaPorcentaje(baseStat: number): number {
    return (baseStat / 255) * 100;
  }
}