import { RecursoAPIConNombre } from "./recurso-api-nombre";

export interface TextoSaborMovimiento {
    flavor_text: string;
    language: RecursoAPIConNombre;
    version_group: RecursoAPIConNombre;
}

export interface MetadatosMovimiento {
    ailment: RecursoAPIConNombre;
    category: RecursoAPIConNombre;
    min_hits: number | null;
    max_hits: number | null;
    min_turns: number | null;
    max_turns: number | null;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
}

export interface CambioEstadisticaMovimiento {
    change: number;
    stat: RecursoAPIConNombre;
}

export interface ValoresMovimientoPasado {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
    effect_entries: EfectoVerboso[];
    type: RecursoAPIConNombre;
    version_group: RecursoAPIConNombre;
}

export interface Movimiento {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: number | null;
    pp: number;
    priority: number;
    power: number;
    contest_combos: CombosContest;
    contest_type: RecursoAPIConNombre;
    contest_effect: { url: string };
    damage_class: RecursoAPIConNombre;
    effect_entries: EfectoVerboso[];
    effect_changes: any[];
    learned_by_pokemon: RecursoAPIConNombre[];
    flavor_text_entries: TextoSaborMovimiento[];
    generation: RecursoAPIConNombre;
    machines: any[];
    meta: MetadatosMovimiento;
    names: { name: string; language: RecursoAPIConNombre }[];
    past_values: ValoresMovimientoPasado[];
    stat_changes: CambioEstadisticaMovimiento[];
    super_contest_effect: { url: string };
    target: RecursoAPIConNombre;
    type: RecursoAPIConNombre;
}

export interface DolenciaMovimiento {
    id: number;
    name: string;
    moves: RecursoAPIConNombre[];
    names: { name: string; language: RecursoAPIConNombre }[];
}

export interface EstiloBatallaMovimiento {
    id: number;
    name: string;
    names: { name: string; language: RecursoAPIConNombre }[];
}

export interface CategoriaMovimiento {
    id: number;
    name: string;
    moves: RecursoAPIConNombre[];
    descriptions: { description: string; language: RecursoAPIConNombre }[];
}

export interface ClaseDañoMovimiento {
    id: number;
    name: string;
    descriptions: { description: string; language: RecursoAPIConNombre }[];
    moves: RecursoAPIConNombre[];
    names: { name: string; language: RecursoAPIConNombre }[];
}

export interface MetodoAprendizajeMovimiento {
    id: number;
    name: string;
    descriptions: { description: string; language: RecursoAPIConNombre }[];
    names: { name: string; language: RecursoAPIConNombre }[];
    version_groups: RecursoAPIConNombre[];
}

export interface ObjetivoMovimiento {
    id: number;
    name: string;
    descriptions: { description: string; language: RecursoAPIConNombre }[];
    moves: RecursoAPIConNombre[];
    names: { name: string; language: RecursoAPIConNombre }[];
}

export interface EfectoVerboso {
    effect: string;
    short_effect: string;
    language: RecursoAPIConNombre;
}

export interface DetalleComboContest {
    use_before: RecursoAPIConNombre[] | null;
    use_after: RecursoAPIConNombre[] | null;
}

export interface CombosContest {
    normal: DetalleComboContest;
    super: DetalleComboContest;
}

