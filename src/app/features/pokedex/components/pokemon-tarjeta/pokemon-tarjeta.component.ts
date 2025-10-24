import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../../../core/models/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-tarjeta',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pokemon-tarjeta.component.html',
})
export class PokemonTarjetaComponent {
  @Input() pokemon!: Pokemon;
  @Output() cardClick = new EventEmitter<Pokemon>();

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

  // Colores para badges de tipos
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

  onCardClick(): void {
    this.cardClick.emit(this.pokemon);
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

  obtenerSprite(): string {
    return (this.pokemon.sprites as any)?.other?.['official-artwork']?.front_default || this.pokemon.sprites.front_default;
  }

  tienetipos(): boolean {
    return this.pokemon?.types && Array.isArray(this.pokemon.types) && this.pokemon.types.length > 0;
  }

  obtenerPrimerTipo(): string {
    if (!this.pokemon || !this.pokemon.types || this.pokemon.types.length === 0) {
      return 'normal';
    }
    return this.pokemon.types[0]?.type?.name || 'normal';
  }
    
}
