import { useEffect } from "react";
import {
  Container,
  // Removal,
  Img,
} from "./ProductModal.styled";
import {
  Overlay,
  ModalBacking,
  Modal,
  CloseBtn,
} from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

import {
  Name,
  Memo,
} from '../ProductCard/ProductCard.styled';

import cross from "assets/images/svg/cross.svg";
import noPhoto from 'assets/images/jpg/productPhoto/no_photo.jpg';

export default function AdvertModal({ card, onClose }) {

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
      <ModalBacking>
        <Modal>
          <Container>
            <CloseBtn type="button" onClick={onClose}>
              {/* <Removal> */}
                <img src={cross} alt="close button" />
              {/* </Removal> */}
            </CloseBtn>
            {/* <Removal /> */}
            {card.photo === '' ? (
              <Img src={noPhoto} alt={card.name} />
            ) : (
              <Img src={card.photo} alt={card.name} />
            )}
            <div>
              <p>Код: {card.code}</p>
              <Name>{card.name}</Name>
              <Memo>{card.memo}</Memo>
            </div>
          </Container>
        </Modal>
      </ModalBacking>
    </Overlay>
  );
}
