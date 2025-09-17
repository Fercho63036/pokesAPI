import { NamedAPIResource } from "../../comon/interface/comon-typing";

/*************************** Maquina ***************************/
/*************************** Las máquinas son la representación de elementos que enseñan movimientos a los Pokémon. ***************************/
export interface Machine {
  id: number;
  item: NamedAPIResource;
  move: NamedAPIResource;
  version_group: NamedAPIResource;
}