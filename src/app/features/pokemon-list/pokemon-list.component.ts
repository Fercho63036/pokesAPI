import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/pokemon.service';


@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [
    CommonModule
],
  providers: [PokeService],
  templateUrl: './pokemon-list.component.html',
})
export class PokeListComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
}
