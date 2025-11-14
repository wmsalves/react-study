import { Cartao, CartaoCabecalho, CartaoCorpo, Descricao } from "../Cartao";

const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const OrcamentoDiario = () => {
  return (
    <Cartao>
      <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>{formatador.format(100)}</Descricao>
      </CartaoCorpo>
    </Cartao>
  );
};
export default OrcamentoDiario;
