import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-tarjeta',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pokemon-tarjeta.component.html',
})
export class PokemonTarjetaComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
