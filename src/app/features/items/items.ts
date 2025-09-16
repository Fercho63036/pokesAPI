import { APIResource, Description, Effect, GenerationGameIndex, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect, VersionGroupFlavorText } from "../comon/comon-typing";

/*************************** Sprites de Objeto ***************************/
/*************************** Sprites usados para representar el objeto dado en el juego. ***************************/
export interface ItemSprites {
    default: string;
}

/*************************** Pokémon que Sostienen el Objeto ***************************/
/*************************** Pokémon que podrían encontrarse en estado salvaje sosteniendo el objeto dado. ***************************/
export interface ItemHolderPokemon {
  pokemon: NamedAPIResource;
  /** Los detalles de la versión en la que este Pokémon sostiene el objeto */
  version_details: ItemHolderPokemonVersionDetail[];
}

/*************************** Detalles de Versión de Pokémon que Sostienen el Objeto ***************************/
/*************************** Los detalles de la versión en la que el Pokémon sostiene el objeto. ***************************/
export interface ItemHolderPokemonVersionDetail {
    rarity: number;
    version: NamedAPIResource;
}

/*************************** Atributo de Objeto ***************************/
/*************************** Los atributos de un objeto definen aspectos particulares, por ejemplo: "usable en batalla" o "consumible". ***************************/
export interface ItemAttribute {
    id: number;
    name: string;
    items: NamedAPIResource[];
    names: Name[];
    descriptions: Description[];
}

/*************************** Categoría de Objeto ***************************/
/*************************** Las categorías de objetos determinan en qué parte de la bolsa del jugador se colocarán. ***************************/
export interface ItemCategory {
    id: number;
    name: string;
    items: NamedAPIResource[];
    names: Name[];
    pocket: NamedAPIResource;
}

/*************************** Efecto de Lanzamiento de Objeto ***************************/
/*************************** Los distintos efectos del movimiento "Lanzar" cuando se usa con diferentes objetos. ***************************/
export interface ItemFlingEffect {
    id: number;
    name: string;
    effect_entries: Effect[];
    items: NamedAPIResource[];
}

/*************************** Compartimento de Objeto ***************************/
/*************************** Compartimentos dentro de la bolsa del jugador usados para almacenar objetos por categoría. ***************************/
export interface ItemPocket {
    id: number;
    name: string;
    categories: NamedAPIResource[];
    names: Name[];
}

/*************************** Objeto ***************************/
/*************************** Un objeto es un elemento en los juegos que el jugador puede recoger, guardar en su bolsa y usar de alguna manera. ***************************/
export interface Item {
    id: number;
    name: string;
    cost: number;
    fling_power: number;
    fling_effect: NamedAPIResource;
    attributes: NamedAPIResource[];
    category: NamedAPIResource;
    effect_entries: VerboseEffect[];
    flavor_text_entries: VersionGroupFlavorText[];
    game_indices: GenerationGameIndex[];
    names: Name[];
    sprites: ItemSprites;
    held_by_pokemon: ItemHolderPokemon[];
    baby_trigger_for: APIResource;
    machines: MachineVersionDetail[];
}
