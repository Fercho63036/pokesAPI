import { APIResource, Description, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect } from "../../comon/interface/comon-typing";
// import { AbilityEffectChange } from "../../pokemon/interface/pokemon";

/*************************** MOVER OBJETIVOS ***************************/
/*************************** Los movimientos de los objetivos se pueden dirigir durante la batalla. Los objetivos pueden ser Pokémon, entornos o incluso otros movimientos. ***************************/
export interface MoveTarget {
    id: number;
    name: string;
    descriptions: Description[];
    moves: NamedAPIResource[];
    names: Name[];
}
/*************************** Mover método de aprendizaje ***************************/
/*************************** Métodos mediante los cuales Pokémon puede aprender movimientos. ***************************/
export interface MoveLearnMethod {
    id: number;
    name: string;
    descriptions: Description[];
    names: Name[];
    version_groups: NamedAPIResource[];
}
/*************************** Mover clase de daño ***************************/
/*************************** Los movimientos de clases de daño pueden tener, por ejemplo, movimientos físicos, especiales o no dañinos. ***************************/
export interface MoveDamageClass {
    id: number;
    name: string;
    descriptions: Description[];
    moves: NamedAPIResource[];
    names: Name[];
}
/*************************** Mover categoría ***************************/
/*************************** Categorías muy generales que agrupan vagamente los efectos del movimiento. ***************************/
export interface MoveCategory {
    id: number;
    name: string;
    moves: NamedAPIResource[];
    descriptions: Description[];
}
/*************************** Mover estilo de batalla ***************************/
/*************************** Estilos de movimientos cuando se utilizan en el Palacio de Batalla. ***************************/
export interface MoveBattleStyle {
    id: number;
    name: string;
    names: Name[];
}
/*************************** Mover dolencia ***************************/
/*************************** Las dolencias de movimiento son condiciones de estado causadas por movimientos utilizados durante la batalla. ***************************/
export interface MoveAilment {
    id: number;
    name: string;
    moves: NamedAPIResource[];
    names: Name[];
}
/*************************** Valores de estadísticas de movimientos pasados ***************************/
/*************************** Mueva los cambios en el valor de los recursos entre los grupos de versiones del juego. ***************************/
export interface PastMoveStatValues {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
    effect_entries: VerboseEffect[];
    type: NamedAPIResource[];
    version_group: NamedAPIResource[];
}
/*************************** Mover cambio de estadísticas ***************************/
/*************************** Estadísticas de los efectos de este movimiento y cuánto los afecta. ***************************/
export interface MoveStatChange {
    change: number;
    stat: NamedAPIResource;
}
/*************************** Mover metadatos ***************************/
/*************************** Metadatos sobre este movimiento. ***************************/
export interface MoveMetaData {
    ailment: NamedAPIResource;
    category: NamedAPIResource;
    min_hits: number;
    max_hits: number;
    min_turns: number;
    max_turns: number;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
}
/*************************** Mover texto de sabor ***************************/
/*************************** El texto de sabor de este movimiento. ***************************/
export interface MoveFlavorText {
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
}

/*************************** Detalle del combo del concurso ***************************/
/*************************** Un detalle de los movimientos Este movimiento se puede utilizar antes o después, otorgando puntos de apelación adicionales en súper concursos. ***************************/
export interface ContestComboDetail {
    use_before: NamedAPIResource[];
    use_after: NamedAPIResource[];
}

/*************************** Conjuntos combinados del concurso ***************************/
/*************************** Un detalle de combos de competición normales y súper que requieren este movimiento. ***************************/
export interface ContestComboSets {
    normal: ContestComboDetail;
    super: ContestComboDetail;
}

/*************************** Mover ***************************/
/*************************** Los movimientos son las habilidades de Pokémon en la batalla. En la batalla, un Pokémon usa un movimiento en cada turno. Algunos movimientos (incluidos los aprendidos por Hidden Machine) también se pueden usar fuera de la batalla, generalmente con el propósito de eliminar obstáculos o explorar nuevas áreas. ***************************/
export interface Move {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: number;
    pp: number;
    priority: number;
    power: number;
    contest_combos: ContestComboSets;
    contest_types: NamedAPIResource;
    contest_effect: APIResource;
    damage_class: NamedAPIResource;
    effect_entries: VerboseEffect[];
    // effect_changes: AbilityEffectChange[];
    flavor_text_entries: MoveFlavorText[];
    generaton: NamedAPIResource;
    machines: MachineVersionDetail[];
    meta: MoveMetaData;
    names: Name[];
    past_values: PastMoveStatValues[];
    stat_changes: MoveStatChange[];
    super_contest_effect: APIResource;
    target: NamedAPIResource;
    type: NamedAPIResource;
}