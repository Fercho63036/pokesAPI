import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { Pokemon } from '../../../../core/models/interfaces/pokemon';
import { ListaPokemones, PokemonItem } from '../../../../core/models/interfaces/pokemon-all';

@Component({
  selector: 'app-pokemon-lista',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pokemon-lista.component.html',
})
export class PokemonListaComponent implements OnInit {

  listaCompletaPokemon: PokemonItem[] = [];

  constructor(
    private pokemonServicio: PokemonService
  ){}

  ngOnInit(): void {
    console.log('Componente Pokemon Lista inicializado');
    this.cargarPokemon();
  }
    
  cargarPokemon(){
    this.pokemonServicio.obtenerPokemons().subscribe((data: ListaPokemones) => {
      this.listaCompletaPokemon = data.results;

      // console.log("Manejo de listas completas " + this.listaCompletaPokemon);
    })
  }



}