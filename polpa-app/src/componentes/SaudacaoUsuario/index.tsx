import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUsuario } from "../../types";
import { obterUsuario } from "../../api";

export const StyledUsuario = styled.div`
  grid-area: usuario;
  color: var(--cor-neutra-light);

  & > h1 {
    margin: 16px 0 0 0;
  }

  & > p {
    margin: 8px 0 16px 0;
  }
`;

const SaudacaoUsuario = () => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);

  const buscaUsuario = async () => {
    const response = await obterUsuario();
    setUsuario(response[0]);
  };

  useEffect(() => {
    buscaUsuario();
  });

  return (
    <StyledUsuario>
      <h1>Olá, {usuario?.nome}</h1>
      <p>Veja como estão suas finanças hoje.</p>
    </StyledUsuario>
  );
};

export default SaudacaoUsuario;
