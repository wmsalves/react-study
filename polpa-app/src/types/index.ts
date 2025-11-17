export interface IUsuario {
  id: string;
  nome: string;
  renda: number;
  orcamentoDiario: number;
}

export interface ITransacoes {
  id: string;
  nome: string;
  valor: number;
  tipo: "receita" | "despesa";
  categoria: string;
  data: string;
}
