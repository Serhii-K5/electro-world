import styled from "styled-components";

export const transition = `250ms linear`;

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--second-black);
  z-index: 100;
`;

const modalStyle = `
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
  
export const ModalBacking = styled.div`
  position: relative;
  padding-top: 20px;
  max-height: 90vh;
  // overflow-y: auto;
  background-color: transparent;

  // &::-webkit-scrollbar {
  //   width: 0;
  //   height: 0;
  // }
  ${modalStyle};
`;
  
export const Modal = styled.div`
  padding: 0;
  border-radius: 7px;
  // overflow-y: auto;
  background-color: var(--primary-white);

  // &::-webkit-scrollbar {
  //   width: 0;
  //   height: 0;
  // }
  ${modalStyle};
`;
  
export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  top: 7px;
  right: 16px;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  border: solid 1px grey;
  border-radius: 50%;
  transition: transform ${transition};

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.2);
    box-shadow: 0 0 7px var(--second-green);
  }
`;
  
export const ModalSelect = styled.div`
  position: relative;
  padding: 10px;
  // overflow-y: auto;
  background-color: var(--primary-white);

  // &::-webkit-scrollbar {
  //   width: 0;
  //   height: 0;
  // }
  ${modalStyle};
`;
