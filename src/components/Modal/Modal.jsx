import React from "react";

import { MdClose } from "react-icons/md";
import { ModalWrapper, Header, Title, CloseButton, Inner } from "./ModalStyles";

const Modal = ({ title, children, isVisible, handleClose }) => {
  return (
    <ModalWrapper isVisible={isVisible}>
      <Inner>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={() => handleClose()}>
            <MdClose size={24} />
          </CloseButton>
        </Header>
        {children}
      </Inner>
    </ModalWrapper>
  );
};

export default Modal;
