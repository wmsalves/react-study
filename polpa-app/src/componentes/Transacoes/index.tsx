import { useRef, useState } from "react";
import MoneyIcon from "../Icones/MoneyIcon";
import Transacao from "../Transacao";
import { Cartao, CartaoCabecalho, CartaoCorpo } from "../Cartao";
import Botao from "../Botao";
import styled from "styled-components";
import Modal, { ModalHandle } from "../Modal";
import { Form } from "react-router";
import Label from "../Label";
import CampoTexto from "../CampoTexto";
import Fieldset from "../Fieldset";
import { SelectGroup, SelectOption } from "../Select";
import { useAppContext } from "../../context/AppContext";
import { ITransacoes } from "../../types";

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

const Transacoes = () => {
  const modalRef = useRef<ModalHandle>(null);

  const { transacoes, criaTransacao } = useAppContext();

  const [novaTransacao, setNovaTransacao] = useState<
    Omit<ITransacoes, "id" | "userId">
  >({
    nome: "",
    valor: 0,
    tipo: "receita",
    categoria: "",
    data: "",
  });

  const aoMudar = (
    campo: keyof typeof novaTransacao,
    valor: string | number
  ) => {
    setNovaTransacao((prev) => ({ ...prev, [campo]: valor }));
  };

  const aoCriarTransacao = async () => {
    try {
      await criaTransacao(novaTransacao);
      setNovaTransacao({
        nome: "",
        valor: 0,
        tipo: "receita",
        categoria: "",
        data: "",
      });
    } catch (err) {
      console.error(err);
    }
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
        <Botao $variante="neutro" onClick={() => modalRef.current?.open()}>
          <MoneyIcon />
          Adicionar transação
        </Botao>
        <Modal
          ref={modalRef}
          cliqueForaModal
          titulo="Adicionar transação"
          icon={<MoneyIcon />}
          aoClicar={aoCriarTransacao}
        >
          <Form>
            <Fieldset>
              <Label htmlFor="nomeTransacao">Nome da transação</Label>
              <CampoTexto
                type="text"
                id="nomeTransacao"
                placeholder="Ex: Compra na padaria"
                value={novaTransacao.nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  aoMudar("nome", e.target.value)
                }
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="valor">Valor</Label>
              <CampoTexto
                type="number"
                id="valor"
                placeholder="10"
                value={novaTransacao.valor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  aoMudar("valor", parseFloat(e.target.value))
                }
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="tipo">Tipo</Label>
              <SelectGroup
                id="tipo"
                value={novaTransacao.tipo}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  aoMudar("tipo", e.target.value)
                }
              >
                <SelectOption value="">Selecione o tipo</SelectOption>
                <SelectOption value="receita">Receita</SelectOption>
                <SelectOption value="despesa">Despesa</SelectOption>
              </SelectGroup>
            </Fieldset>
            <Fieldset>
              <Label htmlFor="valor">Data</Label>
              <CampoTexto
                type="date"
                id="valor"
                placeholder="dd/mm/aaaa"
                value={novaTransacao.data}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  aoMudar("data", e.target.value)
                }
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="categoria">Categoria</Label>
              <CampoTexto
                type="text"
                id="categoria"
                placeholder="Alimentação"
                value={novaTransacao.categoria}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  aoMudar("categoria", e.target.value)
                }
              />
            </Fieldset>
          </Form>
        </Modal>
      </Container>
    </Cartao>
  );
};
export default Transacoes;
