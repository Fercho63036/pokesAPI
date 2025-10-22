import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { Pokemon } from '../../../../core/models/interfaces/pokemon';
import { ListaPokemones } from '../../../../core/models/interfaces/pokemon-all';

@Component({
  selector: 'app-pokemon-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-lista.component.html',
})
export class PokemonListaComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  listaPokemon: Pokemon[] = [];
  pokemonFiltrados: Pokemon[] = [];
  limite = 20;
  desplazamiento = 0;
  cargando = false;
  busqueda = '';
  pokemonSeleccionado: Pokemon | null = null;
  
  // Paginación
  paginaActual = 1;
  pokemonPorPagina = 20;
  totalPaginas = 0;
  pokemonPaginados: Pokemon[] = [];

  // Mapeo de colores por tipo
  coloresTipo: { [key: string]: string } = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-300',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-green-400',
    rock: 'bg-yellow-700',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-700',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300'
  };

  constructor(private pokemonServicio: PokemonService) {}

  ngOnInit(): void {
    this.cargarPokemonInicial();
  }

  cargarPokemonInicial(): void {
    this.cargando = true;
    // Cargar más Pokémon inicialmente (151 para la primera generación)
    this.pokemonServicio.obtenerPokemonsPaginados(0, 151)
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
            
            // Debug: Verificar el primer Pokémon
            if (this.listaPokemon.length > 0) {
              console.log('Primer Pokémon:', this.listaPokemon[0]);
              console.log('Tipos del primer Pokémon:', this.listaPokemon[0].types);
            }
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

  calcularPaginacion(): void {
    this.totalPaginas = Math.ceil(this.pokemonFiltrados.length / this.pokemonPorPagina);
  }

  actualizarPaginaActual(): void {
    const inicio = (this.paginaActual - 1) * this.pokemonPorPagina;
    const fin = inicio + this.pokemonPorPagina;
    this.pokemonPaginados = this.pokemonFiltrados.slice(inicio, fin);
    
    // Scroll hacia arriba suavemente - SOLO en el navegador
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
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
    const inicio = (this.paginaActual - 1) * this.pokemonPorPagina + 1;
    const fin = Math.min(this.paginaActual * this.pokemonPorPagina, this.pokemonFiltrados.length);
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
    console.log('Pokémon seleccionado:', pokemon);
    console.log('Tipos:', pokemon.types);
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
    return this.coloresTipo[tipo] || 'bg-gray-400';
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
    return pokemon.types && pokemon.types.length > 0;
  }
}