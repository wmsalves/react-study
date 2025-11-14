import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { ButtonGroup, CloseButton, ModalContainer, ModalHeader } from "./style";
import Botao from "../Botao";

interface ModalProps {
  icon: React.ReactNode;
  titulo: string;
  children: React.ReactNode;
  aoClicar: () => void;
  cliqueForaModal: boolean;
}

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ icon, titulo, children, aoClicar, cliqueForaModal = true }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const fechaModal = () => {
      dialogRef.current?.close();
    };

    useImperativeHandle(ref, () => ({
      open: () => dialogRef.current?.showModal(),
      close: fechaModal,
    }));

    const aoClicarForaModal = (evento: React.MouseEvent<HTMLDialogElement>) => {
      if (cliqueForaModal && evento.target === dialogRef.current) {
        fechaModal();
      }
    };

    return (
      <ModalContainer ref={dialogRef} onClick={aoClicarForaModal}>
        <ModalHeader>
          <div>
            {icon}
            {titulo}
          </div>
          <CloseButton onClick={fechaModal}>x</CloseButton>
        </ModalHeader>
        {children}
        <ButtonGroup>
          <Botao $variante="secundario" onClick={fechaModal}>
            Cancelar
          </Botao>
          <Botao
            $variante="primario"
            onClick={() => {
              aoClicar();
              fechaModal();
            }}
          >
            Adicionar
          </Botao>
        </ButtonGroup>
      </ModalContainer>
    );
  }
);

export default Modal;
