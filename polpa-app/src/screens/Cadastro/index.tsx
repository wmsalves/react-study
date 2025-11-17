import { useState } from "react";
import {
  Section,
  Container,
  Title,
  Description,
  Illustration,
  SectionWrapper,
} from "./style.js";
import ilustracao from "../../assets/images/ilustracao-cadastro.png";
import { Form, useNavigate } from "react-router";
import Botao from "../../componentes/Botao/index.js";
import CampoTexto from "../../componentes/CampoTexto/index.js";
import Fieldset from "../../componentes/Fieldset/index.js";
import Label from "../../componentes/Label/index.js";
import { IUsuario } from "../../types/index.ts";
import { useAppContext } from "../../context/AppContext.tsx";

const Cadastro = () => {
  const { criaUsuario } = useAppContext();
  const [form, setForm] = useState<Omit<IUsuario, "id" | "orcamentoDiario">>({
    nome: "",
    renda: 0,
  });

  const aoDigitarNoCampoTexto = (campo: "nome" | "renda", valor: string) => {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  };

  const navigate = useNavigate();

  const aoSubmeterFormulario = async (evento: React.FormEvent) => {
    evento.preventDefault();
    criaUsuario(form);
    navigate("/home");
  };

  return (
    <Section>
      <SectionWrapper>
        <Container>
          <Title>Configuração financeira</Title>
          <Description>
            Boas-vindas à plataforma que protege seu bolso! Antes de começar,
            precisamos de algumas informações sobre sua rotina financeira. Vamos
            lá?
          </Description>
          <Form>
            <Fieldset>
              <Label htmlFor="nome">Nome</Label>
              <CampoTexto
                type="text"
                name="nome"
                value={form.nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  aoDigitarNoCampoTexto("nome", e.target.value)
                }
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="renda">Renda mensal total</Label>
              <CampoTexto
                type="text"
                name="renda"
                value={form.renda}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  aoDigitarNoCampoTexto("renda", e.target.value)
                }
              />
            </Fieldset>
          </Form>
          <Botao $variante="primario" onClick={aoSubmeterFormulario}>
            Ir para o app
          </Botao>
        </Container>
        <Illustration
          src={ilustracao}
          alt="ilustração da tela de cadastro. Um avatar mexendo em alguns gráficos"
        />
      </SectionWrapper>
    </Section>
  );
};

export default Cadastro;
