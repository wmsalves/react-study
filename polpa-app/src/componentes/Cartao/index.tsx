import styled from "styled-components";

export const Cartao = styled.div`
  flex: 1;
  text-align: center;
`;

export const CartaoCabecalho = styled.h2`
  font-size: var(--fonte-l);
  color: var(--cor-neutra-light);
  background-color: var(--cor-neutra-medium);
  border-radius: var(--border-radius-l) var(--border-radius-l) 0px 0px;
  padding: var(--padding-s) var(--padding-l);
  margin: 0;
`;

export const CartaoCorpo = styled.div`
  background-color: var(--cor-neutra-dark-medium);
  padding: var(--padding-l) var(--padding-m);
  border-radius: 0px 0px var(--border-radius-l) var(--border-radius-l);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  min-height: 150px;
`;

export const Descricao = styled.div`
  color: var(--cor-primaria);
  font-size: var(--fonte-xxxl);
  font-weight: 700;
  margin: 0;
`;
