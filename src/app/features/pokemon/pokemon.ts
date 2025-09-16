
import { APIResource, Description, Effect, FlavorText, GenerationGameIndex, Name, NamedAPIResource, VerboseEffect, VersionEncounterDetail, VersionGameIndex } from "../comon/comon-typing";

/*************************** Pokemon ***************************/
/*************************** Los movimientos son las habilidades de Pokémon en la batalla. En la batalla, un Pokémon usa un movimiento en cada turno. Algunos movimientos (incluidos los aprendidos por Hidden Machine) también se pueden usar fuera de la batalla, generalmente con el propósito de eliminar obstáculos o explorar nuevas áreas. ***************************/
export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    sprites: PokemonSprites;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];
}
/*************************** Habilidad de Pokémon ***************************/
/*************************** Habilidades que el pokémon dado podría tener potencialmente ***************************/
export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
}
/*************************** Tipo de Pokémon ***************************/
/*************************** Detalles que muestran los tipos que tiene el Pokémon dado. ***************************/
export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}
/*************************** Objeto retenido por Pokémon ***************************/
/*************************** Objetos que el Pokémon puede estar sosteniendo cuando es encontrado. ***************************/
export interface PokemonHeldItem {
    item: NamedAPIResource;
    version_details: PokemonHeldItem[];
}
/*************************** Versión del objeto Pokémon ***************************/
/*************************** Detalles de las diferentes versiones del objeto. ***************************/
export interface PokemonHeldItemVersion {
    version: NamedAPIResource;
    rarity: number;
}
/*************************** Movimiento Pokémon ***************************/
/*************************** Un movimiento con métodos de aprendizaje y detalles de nivel correspondientes a grupos de versiones específicos. ***************************/
export interface PokemonMove {
    move: NamedAPIResource;
    version_group_details: PokemonMoveVersion[];
}
/*************************** Versión del movimiento Pokémon ***************************/
/*************************** Detalles de la versión en la que el Pokémon puede aprender el movimiento. ***************************/
export interface PokemonMoveVersion {
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    level_learned_at: number;
}
/*************************** Estadísticas de Pokémon ***************************/
/*************************** Valores de estadísticas base para el Pokémon dado. ***************************/
export interface PokemonStat {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
}
/*************************** Sprites de Pokémon ***************************/
/*************************** Un conjunto de sprites utilizados para representar a este Pokémon en el juego. ***************************/
export interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
}
/*************************** Área de Encuentro ***************************/
/*************************** Áreas de ubicación de Pokémon donde se pueden encontrar. ***************************/
export interface LocationAreaEncounter {
    location_area: NamedAPIResource;
    version_details: VersionEncounterDetail[];
}
/*************************** Pokemon de colores ***************************/
/*************************** Colores utilizados para clasificar los Pokémon en una Pokédex. El color que aparece en la Pokédex suele ser el color más aparente o el que cubre el cuerpo de cada Pokémon. ***************************/
export interface PokemonColor {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedAPIResource[];
}
/*************************** Forma Pokémon ***************************/
/*************************** Algunos Pokémon pueden aparecer en múltiples formas visualmente diferentes. ***************************/
export interface PokemonForm {
    id: number;
    name: string;
    order: number;
    form_order: number;
    is_default: boolean;
    is_battle_only: boolean;
    is_mega: boolean;
    form_name: string;
    pokemon: NamedAPIResource;
    sprites: PokemonFormSprites;
    version_group: NamedAPIResource;
    names: Name[];
    form_names: Name[];
}
/*************************** Sprites de formas de Pokémon ***************************/
/*************************** Sprites utilizados para representar esta forma de Pokémon en el juego. ***************************/
export interface PokemonFormSprites {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
}
/*************************** Pokemon Habitat ***************************/
/*************************** Los hábitats son generalmente diferentes terrenos en los que se pueden encontrar Pokémon, pero también pueden ser áreas designadas para Pokémon raros o legendarios. ***************************/
export interface PokemonHabitat {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedAPIResource[];
}
/*************************** Forma de Pokémon ***************************/
/*************************** Formas utilizadas para clasificar Pokémon en una Pokédex. ***************************/
export interface PokemonShape {
    id: number;
    name: string;
    awesome_names: AwesomeName[];
    names: Name[];
    pokemon_species: NamedAPIResource[];
}
/*************************** Nombre Genial ***************************/
/***************************El nombre "científico" de la forma del Pokémon, disponible en diferentes idiomas. ***************************/
export interface AwesomeName {
    awesome_name: string;
    language: NamedAPIResource;
}
/*************************** Especie Pokémon ***************************/
/*************************** Una especie Pokémon constituye la base de al menos un Pokémon. Los atributos de una especie Pokémon se comparten entre todas las variedades de Pokémon dentro de la especie. ***************************/
export interface PokemonSpecies {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: NamedAPIResource;
    pokedex_numbers: PokemonSpeciesDexEntry[];
    egg_groups: NamedAPIResource[];
    color: NamedAPIResource;
    shape: NamedAPIResource;
    evolves_from_species: NamedAPIResource;
    evolution_chain: APIResource;
    habitat: NamedAPIResource;
    generation: NamedAPIResource;
    names: Name[];
    pal_park_encounters: PalParkEncounterArea[];
    flavor_text_entries: FlavorText[];
    form_descriptions: Description[];
    genera: Genus[];
    varieties: PokemonSpeciesVariety[];
}
/*************************** Especie Pokémon ***************************/
/*************************** El género de la especie de Pokémon dada listado en múltiples idiomas. ***************************/
export interface Genus {
    genus: string;
    language: NamedAPIResource;
}
/*************************** Entrada de la Pokédex de Especies Pokémon ***************************/
/*************************** Pokédex y los índices reservados en ellas para la especie Pokémon en cuestión. ***************************/
export interface PokemonSpeciesDexEntry {
    entry_number: number;
    pokedex: NamedAPIResource;
}
/*************************** Zona de encuentros en el Parque Amigo ***************************/
/*************************** Encuentros con la especie Pokémon indicada en el Parque Amigo. ***************************/
export interface PalParkEncounterArea {
    base_score: number;
    rate: number;
    area: NamedAPIResource;
}
/*************************** Variedad de especie de Pokémon ***************************/
/*************************** Pokémon que existen dentro de esta especie de Pokémon. ***************************/
export interface PokemonSpeciesVariety {
    is_default: boolean;
    pokemon: NamedAPIResource;
}
/*************************** Habilidad ***************************/
/*************************** Las habilidades proporcionan efectos pasivos a los Pokémon en combate o en el mundo exterior. Los Pokémon tienen múltiples habilidades posibles, pero solo pueden tener una a la vez. ***************************/
export interface Ability {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: NamedAPIResource;
    names: Name[];
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: AbilityFlavorText[];
    pokemon: AbilityPokemon[];
}
/*************************** Cambio de Efecto de Habilidad ***************************/
/*************************** Efectos previos que una habilidad ha tenido a lo largo de los distintos grupos de versiones. ***************************/
export interface AbilityEffectChange {
  effect_entries: Effect[];
  version_group: NamedAPIResource;
}
/*************************** Texto Descriptivo de Habilidad ***************************/
/*************************** El texto descriptivo de una habilidad. ***************************/
export interface AbilityFlavorText {
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
}
/*************************** Habilidad Pokémon ***************************/
/*************************** Pokémon que podrían tener la habilidad dada. ***************************/
export interface AbilityPokemon {
    is_hidden: boolean;
    slot: number;
    pokemon: NamedAPIResource;
}
/*************************** Característica ***************************/
/*************************** Las características indican qué estadística contiene el IV más alto de un Pokémon. ***************************/
export interface Characteristic {
    id: number;
    gene_modulo: number;
    possible_values: number[];
}
/*************************** Grupo de Huevos ***************************/
/*************************** Los grupos de huevos son categorías que determinan qué Pokémon pueden cruzarse entre sí. Un Pokémon puede pertenecer a uno o dos grupos de huevos.***************************/
export interface EggGroup {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedAPIResource[];
}
/*************************** Género ***************************/
/*************************** Los géneros se introdujeron en la Segunda Generación con el fin de criar Pokémon, pero también pueden generar diferencias visuales o incluso diferentes líneas evolutivas. ***************************/
export interface Gender {
    id: number;
    name: string;
    pokemon_species_details: PokemonSpeciesGender[];
    required_for_evolution: NamedAPIResource[];
}
/*************************** Género de la especie Pokémon ***************************/
/*************************** Especies de Pokémon que pueden tener este género y la probabilidad de que lo tengan. ***************************/
export interface PokemonSpeciesGender {
    rate: number;
    pokemon_species: NamedAPIResource[];
}
/*************************** Tasa de crecimiento ***************************/
/*************************** Las tasas de crecimiento indican la velocidad con la que los Pokémon suben de nivel mediante la experiencia. ***************************/
export interface GrowthRate {
    id: number;
    name: string;
    formula: string;
    descriptions: Description[];
    levels: GrowthRateExperienceLevel[];
    pokemon_species: NamedAPIResource[];
}
/*************************** Nivel de experiencia de la tasa de crecimiento ***************************/
/*************************** Niveles y la cantidad de experiencia necesaria para alcanzarlos según la tasa de crecimiento dada. ***************************/
export interface GrowthRateExperienceLevel {
    level: number;
    experience: number;
}
/*************************** Naturaleza ***************************/
/*************************** Las naturalezas influyen en cómo crecen las estadísticas de un Pokémon. ***************************/
export interface Nature {
    id: number;
    name: string;
    decreased_stat: NamedAPIResource;
    increased_stat: NamedAPIResource;
    hates_flavor: NamedAPIResource;
    likes_flavor: NamedAPIResource;
    pokeathlon_stat_changes: NatureStatChange[];
    move_battle_style_preferences: MoveBattleStylePreference[];
    names: Name[];
}
/*************************** Cambio de Estadística por Naturaleza ***************************/
/*************************** Las estadísticas de Pokéathlon que una naturaleza afecta y cuánto las modifica. ***************************/
export interface NatureStatChange {
    max_change: number;
    pokeathlon_stat: NamedAPIResource;
}
/*************************** Preferencia de estilo de combate ***************************/
/*************************** Estilo de combate y probabilidad de que un Pokémon con la naturaleza dada lo use en el Palacio de Combate o la Tienda de Combate. ***************************/
export interface MoveBattleStylePreference {
    low_hp_preference: number;
    high_hp_preference: number;
    move_battle_style: NamedAPIResource;
}
/*************************** Estadística de Pokéathlon ***************************/
/*************************** Las estadísticas de Pokéathlon son diferentes atributos del desempeño de un Pokémon en los Pokéathlons. ***************************/
export interface PokeathlonStat {
    id: number;
    name: string;
    names: Name[];
    affecting_natures: NaturePokeathlonStatAffectSets;
}
/*************************** Afecto de Naturaleza en Estadística de Pokéathlon ***************************/
/*************************** Una naturaleza y cómo cambia la estadística de Pokéathlon referenciada. ***************************/
export interface NaturePokeathlonStatAffect {
    max_change: number;
    nature: NamedAPIResource;
}
/*************************** Conjuntos de Afectos de Naturaleza en Estadísticas de Pokéathlon ***************************/
/*************************** Un detalle de las naturalezas que afectan esta estadística de Pokéathlon de forma positiva o negativa. ***************************/
export interface NaturePokeathlonStatAffectSets {
    increase: NaturePokeathlonStatAffect[];
    decrease: NaturePokeathlonStatAffect[];
}
/*************************** Estadística (Stat) ***************************/
/*************************** Las estadísticas determinan ciertos aspectos de las batallas. ***************************/
export interface Stat {
    id: number;
    name: string;
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: MoveStatAffectSets;
    affecting_natures: NatureStatAffectSets;
    characteristics: APIResource[];
    move_damage_class: NamedAPIResource;
    names: Name[];
}
/*************************** Conjuntos de Afectación de Estadística por Naturaleza ***************************/
/*************************** Un detalle de las naturalezas que afectan la estadística dada de forma positiva o negativa. ***************************/
export interface NatureStatAffectSets {
    increase: NamedAPIResource[];
    decrease: NamedAPIResource[];
}
/*************************** Afectación de Estadística por Movimiento ***************************/
/*************************** El movimiento y cómo este cambia la estadística referenciada. ***************************/
export interface MoveStatAffect {
    change: number;
    move: NamedAPIResource;
}
/*************************** Conjuntos de Afectación de Estadísticas por Movimiento ***************************/
/*************************** Un detalle de los movimientos que afectan una estadística de manera positiva o negativa. ***************************/
export interface MoveStatAffectSets {
    increase: MoveStatAffect[];
    decrease: MoveStatAffect[];
}
/*************************** Tipo Pokémon ***************************/
/*************************** Detalles de Pokémon de un tipo específico. ***************************/
export interface TypePokemon {
    slot: number;
    pokemon: NamedAPIResource;
}
/*************************** Relaciones de tipo ***************************/
/*************************** Detalle de la eficacia de un tipo hacia los demás y viceversa. ***************************/
export interface TypeRelations {
    no_damage_to: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    double_damage_from: NamedAPIResource[];
}
/*************************** Relaciones de tipo en el pasado ***************************/
/*************************** Detalles de cuán efectivo fue este tipo con los demás y viceversa en una generación anterior ***************************/
export interface TypeRelationsPast {
    generation: NamedAPIResource;
    damage_relations: TypeRelations;
}
/*************************** Type ***************************/
/*************************** Los tipos son propiedades de los Pokémon y sus movimientos. ***************************/
export interface Type {
    id: number;
    name: string;
    damage_relations: TypeRelations;
    past_damage_relations: TypeRelationsPast[];
    game_indices: GenerationGameIndex[];
    generation: NamedAPIResource;
    move_damage_class: NamedAPIResource;
    names: Name[];
    pokemon: TypePokemon[];
    moves: NamedAPIResource[];
}