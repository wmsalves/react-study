import CampoTexto from "../CampoTexto";
import SearchIcon from "../Icones/SearchIcon";
import styled from "styled-components";

export const StyledForm = styled.form`
  grid-area: search;
  margin-top: 16px;
  background-color: var(--cor-neutra-dark-medium);
  border-radius: var(--border-radius-s);
  padding: var(--padding-xs) var(--padding-s);
  grid-area: search;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap-s);
`;

const BarraPesquisa = () => {
  return (
    <StyledForm>
      <SearchIcon />
      <CampoTexto
        name="search"
        type="text"
        placeholder="Procure seu dinheiro"
      />
    </StyledForm>
  );
};

export default BarraPesquisa;
