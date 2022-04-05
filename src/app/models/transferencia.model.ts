export interface Transferencia {
  id?: number;
  valor: number;
  destino: string | number;
  binding: string;
  data?: string;
}
