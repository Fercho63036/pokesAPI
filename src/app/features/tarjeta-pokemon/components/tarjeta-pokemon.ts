import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tarjeta-pokemon',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tarjeta-pokemon.html',
    styleUrls: ['./tarjeta-pokemon.scss'],
})
export class TarjetaPokemon implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}