// Interfaces para los tipos de datos

export interface RecursoAPIConNombre {
  name: string;
  url: string;
}

export interface MapaSaborBerry {
  potencia: number;
  sabor: RecursoAPIConNombre;
}

export interface Berry {
  id: number;
  nombre: string;
  tiempoCrecimiento: number;
  cosechaMaxima: number;
  poderRegaloNatural: number;
  tamaño: number;
  suavidad: number;
  sequedadSuelo: number;
  firmeza: RecursoAPIConNombre;
  sabores: MapaSaborBerry[];
  objeto: RecursoAPIConNombre;
  tipoRegaloNatural: RecursoAPIConNombre;
}

export interface FirmezaBerry {
  id: number;
  nombre: string;
  berries: RecursoAPIConNombre[];
  nombres: Nombre[];
}

export interface MapaBerryConSabor {
  potencia: number;
  berry: RecursoAPIConNombre;
}

export interface SaborBerry {
  id: number;
  nombre: string;
  berries: MapaBerryConSabor[];
  tipoContest: RecursoAPIConNombre;
  nombres: Nombre[];
}

export interface Nombre {
  nombre: string;
  idioma: RecursoAPIConNombre;
}

// Interfaces para las respuestas de la API (formato original)
export interface RespuestaAPIBerry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: RecursoAPIConNombre;
  flavors: {
    potency: number;
    flavor: RecursoAPIConNombre;
  }[];
  item: RecursoAPIConNombre;
  natural_gift_type: RecursoAPIConNombre;
}

export interface RespuestaAPIFirmezaBerry {
  id: number;
  name: string;
  berries: RecursoAPIConNombre[];
  names: {
    name: string;
    language: RecursoAPIConNombre;
  }[];
}

export interface RespuestaAPISaborBerry {
  id: number;
  name: string;
  berries: {
    potency: number;
    berry: RecursoAPIConNombre;
  }[];
  contest_type: RecursoAPIConNombre;
  names: {
    name: string;
    language: RecursoAPIConNombre;
  }[];
}