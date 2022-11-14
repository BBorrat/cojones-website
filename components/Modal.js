import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalTitle = styled.div`
  font-size: 25px;
`;

const StyledModalBody = styled.div`
  height: 100%;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: "Helvetica Neue";
  font-size: 25px;z-index: 20;
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background: #fffaf4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 15px;
  z-index: 10;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;