import { DetalleEncuentroVersion } from "./detalle-encuentro-version";
import { RecursoAPIConNombre } from "./recurso-api-nombre";

export interface EncuentroPokemon {
  pokemon: RecursoAPIConNombre;
  version_details: DetalleEncuentroVersion[];
}
