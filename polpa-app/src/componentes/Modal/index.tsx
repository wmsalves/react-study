import React, { useEffect, useRef } from "react";
import {
  ButtonGroup,
  CloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from "./style";
import Botao from "../Botao";

interface ModalProps {
  icon: React.ReactNode;
  titulo: string;
  aoFechar: () => void;
  children: React.ReactNode;
  estaAberta: boolean;
  aoClicar: () => void;
}

const Modal = ({
  icon,
  titulo,
  aoFechar,
  children,
  estaAberta,
  aoClicar,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;

    if (dialogNode) {
      if (estaAberta) {
        dialogNode.showModal();
      } else {
        dialogNode.close();
      }
    }

    const handleClose = () => aoFechar();

    if (dialogNode) {
      dialogNode.addEventListener("close", handleClose);
    }

    return () => {
      if (dialogNode) {
        dialogNode.removeEventListener("close", handleClose);
      }
    };
  }, [estaAberta, aoFechar]);

  return (
    <ModalOverlay>
      <ModalContainer ref={dialogRef}>
        <ModalHeader>
          <div>
            {icon}
            {titulo}
          </div>
          <CloseButton onClick={aoFechar}>x</CloseButton>
        </ModalHeader>
        {children}
        <ButtonGroup>
          <Botao $variante="secundario" onClick={aoFechar}>
            Cancelar
          </Botao>
          <Botao $variante="primario" onClick={aoClicar}>
            Adicionar
          </Botao>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
