import { useState } from "react";
import CampoTexto from "../CampoTexto";
import Fieldset from "../Fieldset";
import Form from "../Form";
import MoneyIcon from "../Icones/MoneyIcon";
import Label from "../Label";
import Modal from "../Modal";
import { SelectGroup, SelectOption } from "../Select";

interface TransacaoModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const TransacaoModal = ({ isOpen, onCloseModal }: TransacaoModalProps) => {
  const [novaTransacao, setNovaTransacao] = useState({
    nome: "",
    valor: 0,
    tipo: "",
    categoria: "",
    data: "",
  });

  const aoSubmeterFormModal = () => {
    onCloseModal();
  };

  return (
    <Modal
      aoFechar={() => onCloseModal()}
      titulo="Adicionar transação"
      estaAberta={isOpen}
      icon={<MoneyIcon />}
      aoClicar={() => aoSubmeterFormModal()}
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
              setNovaTransacao({ ...novaTransacao, nome: e.target.value })
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
              setNovaTransacao({
                ...novaTransacao,
                valor: parseFloat(e.target.value),
              })
            }
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="tipo">Tipo</Label>
          <SelectGroup
            id="tipo"
            value={novaTransacao.tipo}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setNovaTransacao({
                ...novaTransacao,
                tipo: e.target.value,
              })
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
              setNovaTransacao({
                ...novaTransacao,
                data: e.target.value,
              })
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
              setNovaTransacao({
                ...novaTransacao,
                categoria: e.target.value,
              })
            }
          />
        </Fieldset>
      </Form>
    </Modal>
  );
};

export default TransacaoModal;
