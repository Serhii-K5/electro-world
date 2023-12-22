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
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 100;
`;
  
export const Modal = styled.div`
  position: relative;
  padding: 40px;
  max-height: 90vh;
  border-radius: 24px;
  overflow-y: auto;
  background-color: #FFF;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }  
`;
  
export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  top: 16px;
  right: 16px;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  // transition: transform 250ms linear;
  transition: transform ${transition};

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.2);
  }
`;

  
export const ModalSelect = styled.div`
  position: relative;
  padding: 10px;
  // max-height: 90vh;
  // border-radius: 24px;
  overflow-y: auto;
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
