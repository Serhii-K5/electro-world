import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import {
  Overlay,
  Modal,
  CloseBtn,
  Title,
  Span,
  Year,
  Img,
  Ul,
  Li,
  Container,
  Description,
  SubTitle,
  ConditionsUl,
  ConditionLi,
  A,
} from "./ProductModal.styled";
import Cross from "assets/images/svg/cross.svg";

export default function AdvertModal({ card, onClose }) {
  const arrayConditions = card.rentalConditions.split("\n");  
  const mileage = String(card.mileage / 1000).replace(/\./g, ",");

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

  const addressCity = (address) => {
    const addressArr = address.split(', ');
    return addressArr[1];
  };
  
  const addressCountry = (address) => {
    const addressArr = address.split(', ');
    return addressArr[2];
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        <CloseBtn type="button" onClick={onClose}>
          <img src={Cross} alt="close button" />
        </CloseBtn>
        <Img src={card.img} alt={card.model} />
        <Title>
          {card.make}
          <Span>{card.model}</Span>,
          <Year>{card.year}</Year>
        </Title>
        <Ul>
          <Li>{addressCity(card.address)}</Li>
          <Li>{addressCountry(card.address)}</Li>
          <Li>id: {card.id}</Li>
          <Li>Year: {card.year}</Li>
          <Li>Type: {card.type}</Li>
        </Ul>
        <Ul style={{ marginBottom: 14 }}>
          <Li>Fuel Consumption: {card.fuelConsumption}</Li>
          <Li>Engine Size: {card.engineSize}</Li>
        </Ul>
        <Container>
          <Description>{card.description}</Description>
          <div>
            <SubTitle>Accessories and functionalities:</SubTitle>
            <Ul>
              {card.accessories.map((item) => {
                return <Li key={nanoid()}>{item}</Li>;
              })}
            </Ul>
            <Ul style={{ marginBottom: 0 }}>
              {card.functionalities.map((item) => {
                return <Li key={nanoid()}>{item}</Li>;
              })}
            </Ul>
          </div>
          <div>
            <SubTitle>Rental Conditions:</SubTitle>
            <ConditionsUl>
              {arrayConditions.map((item) => {
                return <ConditionLi key={nanoid()}>{item}</ConditionLi>;
              })}
              <ConditionLi>
                Mileage:<Span>{mileage}</Span>
              </ConditionLi>
              <ConditionLi>
                Price:<Span>{card.rentalPrice}</Span>
              </ConditionLi>
            </ConditionsUl>
          </div>
          <A href="tel:+380730000000">Rental car</A>
        </Container>
      </Modal>
    </Overlay>
  );
}
