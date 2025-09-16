import { GenerationGameIndex, Name, NamedAPIResource, VersionEncounterDetail } from "../comon/comon-typing";

/*************************** Ubicación ***************************/
/*************************** Ubicaciones que se pueden visitar dentro de los juegos. ***************************/
export interface Location {
    id: number;
    name: string;
    region: NamedAPIResource;
    names: Name[];
    game_indices: GenerationGameIndex[];
    areas: NamedAPIResource[];
}
/*************************** Ubicación ***************************/
/*************************** Ubicaciones que se pueden visitar dentro de los juegos. ***************************/
export interface LocationArea {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: EncounterMethodRate;
    location: NamedAPIResource;
    names: Name[];
    pokemon_encounters: PokemonEncounter[];
}
/*************************** Área de Pal Park ***************************/
/*************************** Áreas usadas para agrupar encuentros de Pokémon en Pal Park. ***************************/
export interface PalParkArea {
    id: number;
    name: string;
    names: Name[];
    pokemon_encounters: PalParkEncounterSpecies[];
}
/*************************** Especie Encontrada en Pal Park ***************************/
/*************************** Detalles de un Pokémon encontrado en esta área de Pal Park. ***************************/
export interface PalParkEncounterSpecies {
    base_score: number;
    rate: number;
    pokemon_species: NamedAPIResource;
}
/*************************** Region ***************************/
/*************************** Detalles de un Pokémon encontrado en esta área de Pal Park. ***************************/
export interface Region {
    id: number;
    locations: NamedAPIResource[];
    name: string;
    names: Name[];
    main_generation: NamedAPIResource;
    pokedexes: NamedAPIResource[];
    version_groups: NamedAPIResource[];
}
/*************************** Tasa de Método de Encuentro ***************************/
/*************************** Método mediante el cual los Pokémon pueden ser encontrados en un área y la probabilidad de que ocurra según la versión del juego. ***************************/
export interface EncounterMethodRate {
    encounter_method: NamedAPIResource;
    version_details: EncounterVersionDetails[];
}
/*************************** Detalles de Versión de Encuentro ***************************/
/*************************** La probabilidad de que ocurra un encuentro en una versión del juego. ***************************/
export interface EncounterVersionDetails {
    rate: number;
    version: NamedAPIResource;
}
/*************************** Encuentro de Pokémon ***************************/
/*************************** Describe un encuentro de Pokémon en un área determinada. ***************************/
export interface PokemonEncounter {
    pokemon: NamedAPIResource;
    version_details: VersionEncounterDetail[];
}
