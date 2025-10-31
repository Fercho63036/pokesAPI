// Interfaces
export interface RecursoAPIConNombre {
  name: string;
  url: string;
}

export interface Maquina {
  id: number;
  item: RecursoAPIConNombre;
  move: RecursoAPIConNombre;
  version_group: RecursoAPIConNombre;
}

export interface RespuestaListaMaquinas {
  count: number;
  next: string | null;
  previous: string | null;
  results: RecursoAPIConNombre[];
}
