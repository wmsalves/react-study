import { useState } from "react";
import MoneyIcon from "../Icones/MoneyIcon";
import Transacao from "../Transacao";
import { Cartao, CartaoCabecalho, CartaoCorpo } from "../Cartao";
import Botao from "../Botao";
import TransacaoModal from "../TransacaoModal";
import styled from "styled-components";

export const Container = styled(CartaoCorpo)`
  padding: var(--padding-l) var(--padding-m);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const ListaMovimentacoes = styled.ul`
  list-style: none;
  color: var(--cor-primaria);
  margin: 0;
  padding-left: 0px;
  padding-bottom: var(--padding-m);
  width: 100%;
  height: 535px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const transacoes = [
  {
    id: 1,
    nome: "Compra de supermercado",
    valor: 150,
    tipo: "despesa",
    categoria: "Alimentação",
    data: "2024-10-10",
  },
  {
    id: 2,
    nome: "Pagamento de aluguel",
    valor: 1000,
    tipo: "despesa",
    categoria: "Moradia",
    data: "2024-10-05",
  },
  {
    id: 3,
    nome: "Recebimento de salário",
    valor: 3000,
    tipo: "receita",
    categoria: "Renda",
    data: "2024-10-01",
  },
];

const Transacoes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Cartao>
      <CartaoCabecalho>Movimentação financeira</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {transacoes.map((transacao) => (
            <Transacao
              key={transacao.id}
              tipo={transacao.tipo}
              nome={transacao.nome}
              valor={transacao.valor}
              data={transacao.data}
            />
          ))}
        </ListaMovimentacoes>
        <Botao $variante="neutro" onClick={() => handleOpenModal()}>
          <MoneyIcon />
          Adicionar transação
        </Botao>
        {isModalOpen && (
          <TransacaoModal
            isOpen={isModalOpen}
            onCloseModal={() => handleCloseModal()}
          />
        )}
      </Container>
    </Cartao>
  );
};
export default Transacoes;
