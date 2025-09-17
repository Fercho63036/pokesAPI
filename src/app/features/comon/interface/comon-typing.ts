/*************************** Recurso API nombrado ***************************/
/***************************  El nombre y la URL del recurso referenciado.  ***************************/
export interface NamedAPIResource {
    name: string;
    url: string;
}
/*************************** Lista de recursos de API con nombre ***************************/
/*************************** Al llamar a cualquier punto final de API sin un ID o nombre de recurso, se devolverá una lista paginada de recursos disponibles para esa API.  ***************************/
export interface NamedAPIResourceList {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
}
/*************************** Recurso API ***************************/
/***************************  Una URL para otro recurso en la API.  ***************************/
export interface APIResource {
    url: string;
}
/*************************** Descripción ***************************/
/*************************** La descripción localizada de un recurso API en un idioma específico. ***************************/
export interface Description {
    description: string;
    language: NamedAPIResource;
}
/*************************** Efecto ***************************/
/*************************** El texto de efecto localizado para un recurso API en un idioma específico. ***************************/
export interface Effect {
    effect: string;
    language: NamedAPIResource;
}
/*************************** Encuentro ***************************/
/*************************** Información de un encuentro con Pokémon. ***************************/
export interface Encounter {
    min_level: number;
    max_level: number;
    condition_values: NamedAPIResource;
    chance: number;
    method: NamedAPIResource;
}
/*************************** Texto de sabor ***************************/
/***************************  El texto de sabor localizado para un recurso API en un idioma específico. ***************************/
export interface FlavorText {
    flavor_text: string;
    language: NamedAPIResource;
    version: NamedAPIResource;
}
/*************************** Índice de juegos de generación ***************************/
/***************************  La generación relevante para este índice de juegos ***************************/
export interface GenerationGameIndex {
    game_index: number;
    generation: NamedAPIResource;
}
/*************************** Idioma ***************************/
/***************************  Idiomas para traducciones de información de recursos API. ***************************/
export interface Language {
    id: number;
    name: string;
    official: boolean;
    iso639: string;
    iso3166: string;
    names: Name[];
}
/*************************** Detalle de la versión de la máquina ***************************/
/*************************** La máquina que enseña a moverse de un objeto. ***************************/
export interface MachineVersionDetail {
    machine: NamedAPIResource;
    version_group: NamedAPIResource;
}
/*************************** Nombre ***************************/
/*************************** El nombre localizado de un recurso API en un idioma específico. ***************************/
export interface Name {
    name: string;
    language: NamedAPIResource;
}
/*************************** Efecto verboso ***************************/
/*************************** El efecto localizado de un recurso API. ***************************/
export interface VerboseEffect {
    effect: string;
    short_effect: string;
    language: NamedAPIResource;
}
/*************************** Detalle del encuentro de versiones ***************************/
/*************************** Encuentros y sus detalles específicos. ***************************/
export interface VersionEncounterDetail {
    version: NamedAPIResource;
    max_chance: number;
    encounter_details: Encounter[];
}
/*************************** Índice de juegos de versiones ***************************/
/*************************** La identificación interna y la versión de un recurso API. ***************************/
export interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource;
}
/*************************** Texto del sabor del grupo de versiones ***************************/
/*************************** El texto de sabor de un recurso API. ***************************/
export interface VersionGroupFlavorText {
    text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
}