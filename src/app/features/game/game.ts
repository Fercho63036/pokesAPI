import { Description, Name, NamedAPIResource } from "../comon/comon-typing";

/*************************** Generación ***************************/
/*************************** Una generación es una agrupación de los juegos de Pokémon que se diferencian según los Pokémon que incluyen. ***************************/
export interface Generation {
    id: number;
    name: string;
    abilities: NamedAPIResource[];
    names: Name[];
    main_region: NamedAPIResource;
    moves: NamedAPIResource[];
    pokemon_species: NamedAPIResource[];
    types: NamedAPIResource[];
    version_groups: NamedAPIResource[];
}
/*************************** Generación ***************************/
/*************************** Una generación es una agrupación de los juegos de Pokémon que se diferencian según los Pokémon que incluyen. ***************************/
export interface Generation {
    id: number;
    name: string;
    abilities: NamedAPIResource[];
    names: Name[];
    main_region: NamedAPIResource;
    moves: NamedAPIResource[];
    pokemon_species: NamedAPIResource[];
    types: NamedAPIResource[];
    version_groups: NamedAPIResource[];
}
/*************************** Pokedex ***************************/
/*************************** Una Pokédex es un dispositivo electrónico de mano tipo enciclopedia, capaz de registrar y almacenar información de los distintos Pokémon en una región determinada, con excepción del Pokédex nacional y algunos Pokédex más pequeños relacionados con partes de una región. ***************************/
export interface Pokedex {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: Description[];
    names: Name[];
    pokemon_entries: PokemonEntry[];
    region: NamedAPIResource;
    version_groups: NamedAPIResource[];
}
/*************************** Entrada de Pokémon ***************************/
/*************************** Pokémon catalogados para el Pokédex. ***************************/
export interface PokemonEntry {
    entry_number: number;
    pokemon_species: NamedAPIResource[];
}
/*************************** Versión ***************************/
/*************************** Versiones de los juegos, por ejemplo: Rojo, Azul o Amarillo. ***************************/
export interface Version {
    id: number;
    name: string;
    names: Name[];
    version_group: NamedAPIResource;
}
/*************************** Grupo de versiones ***************************/
/*************************** Los grupos de versiones categorizan versiones muy similares de los juegos. ***************************/
export interface VersionGroup {
    id: number;
    name: string;
    order: number;
    generation: NamedAPIResource;
    move_learn_methods: NamedAPIResource[];
    pokedexes: NamedAPIResource[];
    regions: NamedAPIResource[];
    versions: NamedAPIResource[];
}