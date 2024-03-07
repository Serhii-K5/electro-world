// import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import {
  Img,
} from "./ProductModal.styled";
import {
  Overlay,
  Modal,
  CloseBtn,
} from "components/ConstComponentsStyle/ConstComponentsStyle.styled";

import {
  Name,
  Memo,
} from '../ProductCard/ProductCard.styled';

import cross from "assets/images/svg/cross.svg";
import noPhoto from 'assets/images/jpg/no_photo.jpg';

export default function AdvertModal({ card, onClose }) {
  // const arrayConditions = card.rentalConditions.split("\n");  
  // const mileage = String(card.mileage / 1000).replace(/\./g, ",");

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
          <img src={cross} alt="close button" />
        </CloseBtn>
        {card.photo === '' ? (
          <Img src={noPhoto} alt={card.name} />
        ) : (
          <Img src={card.photo} alt={card.name} />
        )}

        <div>
          <p>Код: {card.code}</p>
          <Name >{card.name}</Name>
          <Memo>{card.memo}</Memo>
        </div>        
      </Modal>
    </Overlay>
  );
}
