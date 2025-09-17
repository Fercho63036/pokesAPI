import { Effect, FlavorText, NamedAPIResource } from "../../comon/interface/comon-typing";

/*************************** Tipo de Concurso ***************************/
/*************************** Los tipos de concurso son categorías que los jueces utilizan para evaluar la condición de un Pokémon en los concursos Pokémon. ***************************/
export interface ContestType {
  id: number;
  name: string;
  berry_flavor: NamedAPIResource;
  names: ContestName[];
}
/*************************** Efecto del Concurso ***************************/
/*************************** Los efectos del concurso se refieren a los efectos de los movimientos al usarlos en los concursos. ***************************/
export interface ContestEffect {
    id: number;
    appeal: number;
    jam: number;
    effect_entries: Effect[];
    flavor_text_entries: FlavorText[];
}
/*************************** Efecto del Súper Concurso ***************************/
/*************************** Los efectos del Súper Concurso se refieren a los efectos de los movimientos al usarlos en los súper concursos. ***************************/
export interface SuperContestEffect {
    id: number;
    appeal: number;
    flavor_text_entries: FlavorText[];
    moves: NamedAPIResource[];
}
/*************************** Nombre del Concurso ***************************/
/*************************** El nombre del tipo de concurso en cuestión. ***************************/
export interface ContestName {
    name: string;
    color: string;
    language: NamedAPIResource;
}