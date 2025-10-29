import { EncuentroPokemon } from "./encuentro-pokemon";
import { Nombre } from "./nombre";
import { RecursoAPIConNombre } from "./recurso-api-nombre";
import { TasaMetodoEncuentro } from "./tasa-metodo-encuentro";

export interface AreaUbicacion {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: TasaMetodoEncuentro[];
  location: RecursoAPIConNombre;
  names: Nombre[];
  pokemon_encounters: EncuentroPokemon[];
}