

export type SearchType = {
    documento: string
    servicios: string
};

export type Servicio={
    code: string
    name: string
}


export interface Cliente {
  codigo: string;
  nombres: string;
  direccion: string;
  documento_identidad: string;
  estado: 'ACTIVO' | 'INACTIVO';
  deuda_total: number;
}

export interface ClienteResponse {
  codigo: string;
  mensaje: string;
  resultado: Cliente[];
}


