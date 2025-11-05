// src/app/core/models/interfaces/berry.ts

/***************************** RESPUESTAS DE LA API *************************/
export interface RespuestaAPIBerry {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: {
        name: string;
        url: string;
    };
    flavors: {
        potency: number;
        flavor: {
            name: string;
            url: string;
        };
    }[];
    item: {
        name: string;
        url: string;
    };
    natural_gift_type: {
        name: string;
        url: string;
    };
}

export interface RespuestaAPIFirmezaBerry {
    id: number;
    name: string;
    berries: {
        name: string;
        url: string;
    }[];
    names: {
        name: string;
        language: {
            name: string;
            url: string;
        };
    }[];
}

export interface RespuestaAPISaborBerry {
    id: number;
    name: string;
    berries: {
        potency: number;
        berry: {
            name: string;
            url: string;
        };
    }[];
    contest_type: {
        name: string;
        url: string;
    };
    names: {
        name: string;
        language: {
            name: string;
            url: string;
        };
    }[];
}

/***************************** MODELOS TRANSFORMADOS *************************/
export interface Berry {
    id: number;
    nombre: string;
    tiempoCrecimiento: number;
    cosechaMaxima: number;
    poderRegaloNatural: number;
    tamano: number;
    suavidad: number;
    sequedadSuelo: number;
    firmeza: {
        name: string;
        url: string;
    };
    sabores: {
        potencia: number;
        sabor: {
            name: string;
            url: string;
        };
    }[];
    objeto: {
        name: string;
        url: string;
    };
    tipoRegaloNatural: {
        name: string;
        url: string;
    };
}

export interface FirmezaBerry {
    id: number;
    nombre: string;
    berries: {
        name: string;
        url: string;
    }[];
    nombres: {
        nombre: string;
        idioma: {
            name: string;
            url: string;
        };
    }[];
}

export interface SaborBerry {
    id: number;
    nombre: string;
    berries: {
        potencia: number;
        berry: {
            name: string;
            url: string;
        };
    }[];
    tipoContest: {
        name: string;
        url: string;
    };
    nombres: {
        nombre: string;
        idioma: {
            name: string;
            url: string;
        };
    }[];
}

export interface ItemListaBerries {
    name: string;
    url: string;
}

export interface RespuestaListaBerries {
    count: number;
    next: string | null;
    previous: string | null;
    results: ItemListaBerries[];
}