import { DetallesVersionEncuentro } from "./detalle-version-encuentro";
import { RecursoAPIConNombre } from "./recurso-api-nombre";

export interface TasaMetodoEncuentro {
    encounter_method: RecursoAPIConNombre;
    version_details: DetallesVersionEncuentro[];
}