import axios from "axios";
import { ITransacoes, IUsuario } from "../types";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const obterUsuario = async (): Promise<IUsuario[]> => {
  const { data } = await api.get<IUsuario[]>("/usuarios");
  return data;
};

export const criarUsuario = async (
  usuario: Omit<IUsuario, "id">
): Promise<IUsuario> => {
  const { data } = await api.post<IUsuario>("/usuarios", usuario);
  return data;
};

export const obterTransacoes = async (): Promise<ITransacoes[]> => {
  const { data } = await api.get<ITransacoes[]>("/transacoes");
  return data;
};

export const criarTransacao = async (
  transacao: Omit<ITransacoes, "id">
): Promise<ITransacoes> => {
  const { data } = await api.post<ITransacoes>("/transacoes", transacao);
  return data;
};
