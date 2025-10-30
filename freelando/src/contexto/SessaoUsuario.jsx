import { createContext, useContext } from "react";

const SessaoUsuarioContext = createContext({
  usuarioEstaLogado: false,
  login: () => null,
  logout: () => null,
  perfil: {},
});

export const useSessaoUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
};
