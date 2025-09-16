import { Name, NamedAPIResource } from "../comon/comon-typing";

/*************************** Disparador de Evolución ***************************/
/*************************** Los disparadores de evolución son los eventos y condiciones que hacen que un Pokémon evolucione. ***************************/
export interface EvolutionTrigger {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedAPIResource[];
}

/*************************** Detalle de Evolución ***************************/
/*************************** Todos los detalles relacionados con la evolución específica de la especie de Pokémon referenciada. ***************************/
export interface EvolutionDetail {
    item: NamedAPIResource;
    trigger: NamedAPIResource;
    gender: number;
    held_item: NamedAPIResource;
    known_move: NamedAPIResource;
    known_move_type: NamedAPIResource;
    location: NamedAPIResource;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: NamedAPIResource;
    party_type: NamedAPIResource;
    relative_physical_stats: 1 | 0 | -1;
    time_of_day: 'Day' | 'Night';
    trade_species: NamedAPIResource;
    turn_upside_down: boolean;
}

/*************************** Eslabón de la cadena ***************************/
/*************************** Contiene detalles de la evolución de un Pokémon en la cadena. Cada eslabón hace referencia al siguiente Pokémon en el orden natural de evolución. ***************************/
export interface ChainLink {
    is_baby: boolean;
    species: NamedAPIResource;
    evolution_detail: EvolutionDetail[];
    envolves_to: ChainLink[];
}
/*************************** Cadena de Evolución ***************************/
/*************************** Las cadenas de evolución son esencialmente árboles genealógicos. ***************************/
export interface EvolutionChain {
    id: number;
    baby_trigger_item: NamedAPIResource;
    chain: ChainLink;
}