import { EspecieEncuentroPalPark } from "./especie-encuentro-pal-park";
import { Nombre } from "./nombre";

export interface AreaPalPark {
    id: number;
    name: string;
    names: Nombre[];
    pokemon_encounters: EspecieEncuentroPalPark[];
}