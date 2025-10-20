import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-lista',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pokemon-lista.component.html',
})
export class PokemonListaComponent implements OnInit {

  ngOnInit(): void {
    console.log('Componente Pokemon Lista inicializado');
  }
    
  constructor(
    private pokemonServicio: PokemonService
  ){}

  

}