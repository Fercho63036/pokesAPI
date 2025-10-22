import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
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
  listaPokemon: Pokemon[] = [];
  pokemonFiltrados: Pokemon[] = [];
  limite = 20;
  desplazamiento = 0;
  cargando = false;
  busqueda = '';
  pokemonSeleccionado: Pokemon | null = null;

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
    this.cargarMasPokemon();
  }

  cargarMasPokemon(): void {
    if (this.cargando) return;
    
    this.cargando = true;
    this.pokemonServicio.obtenerPokemonsPaginados(this.desplazamiento, this.limite)
      .subscribe({
        next: (data: any) => {
          const promesas = data.results.map((item: any) => 
            this.pokemonServicio.obtenerDetallesPokemon(item.url).toPromise()
          );

          Promise.all(promesas).then((detalles: any[]) => {
            this.listaPokemon = [...this.listaPokemon, ...detalles];
            this.pokemonFiltrados = [...this.listaPokemon];
            this.desplazamiento += this.limite;
            this.cargando = false;
          });
        },
        error: () => {
          this.cargando = false;
        }
      });
  }

  buscarPokemon(evento: Event): void {
    const termino = (evento.target as HTMLInputElement).value.toLowerCase();
    this.busqueda = termino;

    if (termino === '') {
      this.pokemonFiltrados = [...this.listaPokemon];
      return;
    }

    this.pokemonFiltrados = this.listaPokemon.filter(pokemon =>
      pokemon.name.toLowerCase().includes(termino) ||
      pokemon.id.toString().includes(termino)
    );
  }

  abrirDetalle(pokemon: Pokemon): void {
    this.pokemonSeleccionado = pokemon;
  }

  cerrarDetalle(evento?: MouseEvent): void {
    if (evento) {
      // Solo cerrar si el click fue en el fondo oscuro
      if (evento.target === evento.currentTarget) {
        this.pokemonSeleccionado = null;
      }
    } else {
      // Cerrar directamente cuando se llama sin evento (botón X)
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

  @HostListener('window:scroll')
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      this.cargarMasPokemon();
    }
  }
}