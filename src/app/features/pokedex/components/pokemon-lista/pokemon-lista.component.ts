import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
    // Aquí va tu lógica de inicialización
    console.log('Componente Pokemon Lista inicializado');
  }
    
    constructor(){

    }
}