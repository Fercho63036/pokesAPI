
import { Name, NamedAPIResource } from "../comon/comon-typing";

/*************************** Método de Encuentro ***************************/
/*************************** Métodos mediante los cuales el jugador puede encontrar Pokémon en estado salvaje ***************************/
export interface EncounterMethod {
    id: number;
    name: string;
    order: number;
    names: Name[];
}

/*************************** Condición de Encuentro ***************************/
/*************************** Condiciones que afectan qué Pokémon pueden aparecer en estado salvaje, por ejemplo, día o noche. ***************************/
export interface EncounterCondition {
    id: number;
    name: string;
    names: Name[];
    values: NamedAPIResource[];
}

/*************************** Valor de la condición de encuentro ***************************/
/*************************** Los valores de la condición de encuentro son los distintos estados que puede tener una condición de encuentro; por ejemplo, la hora del día puede ser de día o de noche. ***************************/
export interface EncounterConditionValue {
    id: number;
    name: string;
    condition: NamedAPIResource;
    names: Name[];
}