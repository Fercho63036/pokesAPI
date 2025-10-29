import { Nombre } from "./nombre";
import { RecursoAPIConNombre } from "./recurso-api-nombre";

export interface Region {
    id: number;
    name: string;
    locations: RecursoAPIConNombre[];
    names: Nombre[];
    main_generation: RecursoAPIConNombre;
    pokedexes: RecursoAPIConNombre[];
    version_groups: RecursoAPIConNombre[];
}
