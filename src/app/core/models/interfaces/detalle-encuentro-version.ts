import { RecursoAPIConNombre } from "./recurso-api-nombre";

export interface DetalleEncuentroVersion {
    version: RecursoAPIConNombre;
    max_chance: number;
    encounter_details: {
        min_level: number;
        max_level: number;
        condition_values: RecursoAPIConNombre[];
        chance: number;
        method: RecursoAPIConNombre;
    }[];
}
