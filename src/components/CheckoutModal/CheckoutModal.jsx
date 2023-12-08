import { useEffect } from "react";
import {
  Overlay,
  Modal,
  CloseBtn,
  Div,
} from "./CheckoutModal.styled";
import Cross from "assets/images/svg/cross.svg";

const CheckoutModul = ({onClose}) => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        {/* <p>Module page</p> */}

        <CloseBtn type="button" onClick={onClose}>
          <img src={Cross} alt="close button" />
        </CloseBtn>

        <Div>
            <p>Страница оформления заказа</p>
        </Div>    
      </Modal>  
    </Overlay>
  )
};

export default CheckoutModul;