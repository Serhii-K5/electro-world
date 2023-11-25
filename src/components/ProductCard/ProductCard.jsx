import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders, deleteOrders } from "redux/slice/orderSlice";
import { selectOrders } from "redux/selectors";
// import CardModal from "components/ProductModal/ProductModal";
// import { changeQuantity } from "redux/slice/numberPurchasesSlice";

import {
  Container,
  // OrderBtn,
  Aside,
  ImgDiv,
  ImgAside,
  DivHov,
  OptionDiv,
  Img,
  OptionContainer,
  Price,
  PriceOld,
  Input,
  QuantityDiv,
  Div,
  ButtonDiv,
  Name,
  Memo,
  // Title,
  // RentalPrice,
  // TitleContainer,
  // Span,
  // Year,
  // Ul,
  // Li,
  // Button,
} from "./ProductCard.styled";

// import HeartActive from "assets/images/svg/heart-active.svg";
// import Heart from "assets/images/svg/heart.svg";
import noPhoto from "../../assets/images/no_photo.jpg";
// import alternative from "../../assets/images/svg/alternativeProducts.svg";
import alternative from "../../assets/images/svg/shuffle-arrows.svg";
// import related from "../../assets/images/svg/relatedProducts.svg";
// import related from "../../assets/images/svg/link1.svg";
import related from "../../assets/images/svg/link_.svg";
import sprite from "../../assets/images/svg/sprite.svg";

export default function Product({ card }) {
  const dispatch = useDispatch();
  const orderProducts = useSelector(selectOrders);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  const [NumberPurchases, setNumberPurchases] = useState(0);
  
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isCurrentOrder = orderProducts.find(
      (order) => order.id === card.id
    );
    if (isCurrentOrder) {
      setIsOrder(true);
      setNumberPurchases(NumberPurchases + 1);
    } else {
      setIsOrder(false);
    }
  }, [card, orderProducts]);

  
  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onAdd = () => {
    dispatch(addOrders(card));
    setIsOrder(true);
  };

  const onDelete = () => {
    dispatch(deleteOrders(card.id));
    setIsOrder(false);
  };
  
  const productName = (name) => {
    return name.replace('\"'/i,'"');
  };
  
  const onOpenModal = () => {
    setIsModalShown(true);
  };

  const onMouseMove = () => {
    setIsVisible(true);
  };

  const onMouseOut = () => {
    setIsVisible(false);
  };
  
  const onAdd1 = () => {
    dispatch(changeQuantity(card));
    setIsOrder(true);
  };
  
  return (
    <>
      <Container>
        {/* {isOrder ? (
          <OrderBtn onClick={onDelete}>
            <img src={HeartActive} alt="Order button" />
          </OrderBtn>
        ) : (
          <OrderBtn onClick={onAdd}>
            <img src={Heart} alt="Order button" />
          </OrderBtn>
        )} */}      
        <DivHov onMouseMove={onMouseMove} onMouseOut={onMouseOut}>        
          {isVisible && <Aside>
            {card.photoPackage && <Img src={card.photoPackage} alt={card.name} />}
            <ImgDiv>
              <div style={{ width: '25px', height: '25px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.1 490.1"><path d="M194.5 324.35l15-24.2c3.6-5.8 1.8-13.3-4-16.9-5.7-3.6-13.3-1.8-16.9 4l-15 24.2c-27.2 43.9-66 69.1-106.6 69.1H12.2c-6.8 0-12.2 5.5-12.2 12.3s5.5 12.3 12.2 12.3h54.9c49.3-.2 95.7-29.6 127.4-80.8zM486.4 88.75L427 29.25c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l38.6 38.6H391.4c-49.2 0-95.7 29.4-127.4 80.6l-9.2 14.9c-3.6 5.8-1.8 13.3 4 16.9 2 1.2 4.2 1.8 6.4 1.8 4.1 0 8.1-2.1 10.4-5.8l9.2-14.9c27.2-43.9 66-69 106.6-69H448.2l-38.6 38.6c-4.8 4.8-4.8 12.5 0 17.3 2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l59.5-59.5c4.7-4.8 4.7-12.6-.1-17.3zm-26.1 8.8v-.2-.2l.2.2-.2.2z"></path><path d="M409.6 460.85c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l59.5-59.5c4.8-4.8 4.8-12.5 0-17.3l-59.5-59.4c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l38.6 38.6h-55.1c-40.5 0-79.4-25.2-106.6-69.1l-90.2-145.7c-31.7-51.3-78.2-80.6-127.4-80.6H12.2c-6.8 0-12.2 5.5-12.2 12.3s5.5 12.3 12.2 12.3h56.7c40.5 0 79.4 25.2 106.6 69l90.2 145.7c31.7 51.3 78.2 80.7 127.4 80.7h55.1l-38.6 38.6c-4.7 4.6-4.7 12.3 0 17.1zm50.7-68.3l.2.2-.2.2v-.2-.2z"></path></svg>
              </div>
            </ImgDiv>
            <p>Альтернативы</p>
            <ImgDiv>
              <div style={{ width: '25px', height: '25px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.971 54.971"><path d="M51.173 3.801c-5.068-5.068-13.315-5.066-18.384 0l-9.192 9.192a2 2 0 1 0 2.828 2.828l9.192-9.192a8.938 8.938 0 0 1 6.363-2.622c2.413 0 4.673.932 6.364 2.623s2.623 3.951 2.623 6.364a8.934 8.934 0 0 1-2.623 6.363L36.325 31.379c-3.51 3.508-9.219 3.508-12.729 0a2 2 0 1 0-2.828 2.828c2.534 2.534 5.863 3.801 9.192 3.801s6.658-1.267 9.192-3.801l12.021-12.021c2.447-2.446 3.795-5.711 3.795-9.192 0-3.482-1.348-6.746-3.795-9.193z"></path><path d="M27.132 40.57l-7.778 7.778a8.935 8.935 0 0 1-6.364 2.623 8.937 8.937 0 0 1-6.364-2.623c-3.509-3.509-3.509-9.219 0-12.728L17.94 24.306a8.938 8.938 0 0 1 6.364-2.622c2.412 0 4.672.932 6.363 2.622a2 2 0 1 0 2.828-2.828c-5.067-5.067-13.314-5.068-18.384 0L3.797 32.793C1.351 35.239.003 38.504.003 41.985c0 3.48 1.348 6.745 3.795 9.191a12.905 12.905 0 0 0 9.191 3.795c3.481 0 6.746-1.348 9.192-3.795l7.778-7.778a2 2 0 0 0-2.827-2.828z"></path></svg>
               </div>
            </ImgDiv>
            <p>Связанные</p>
          </Aside>}
          <div>          
          <OptionDiv>
            {card.photo === "" ?
              <Img src={noPhoto} alt={card.name} />
              : <Img src={card.photo} alt={card.name} />          
            }
            <OptionContainer>
              <PriceOld>{card.oldPrice} грн.</PriceOld>
              <Price>{card.price} грн.</Price>
              <hr />
              {/* <QuantityDiv style={isVisible ? {zIndex: 100} : {zIndex: 0}}> */}
              <QuantityDiv>
                <Div style={isVisible ? {color: "black", borderColor: "grey"} : {color: "white", borderColor: "white"}}>-</Div>
                <Input
                    defaultValue={1}
                    style={isVisible ? {color: "black", borderColor: "grey"} : {color: "white", borderColor: "white"}}
                />
                <Div  style={isVisible ? {color: "black", borderColor: "grey"} : {color: "white", borderColor: "white"}}>+</Div>
              </QuantityDiv>
              
                
              {/* {isVisible ? <QuantityDiv style={{ zIndex: "-1" }}>
                <Div>-</Div>
                <Input
                  defaultValue={1}
                />
                <Div>+</Div>
                : <QuantityDiv>
                <Div>-</Div>
                <Input
                  defaultValue={1}
                />
                <Div>+</Div>
              </QuantityDiv>} */}
              
            <ButtonDiv>
              Додати до замовлення
            </ButtonDiv> 
            </OptionContainer>
            
            {/* <TitleContainer>
              <Title>
                <p>{card.price}</p>
                <p>{card.oldPrice} </p>              */}
                {/* <Span>{card.model}</Span>,
                <Year>{card.year}</Year> */}
              {/* </Title>
              <br /> */}
              {/* <RentalPrice>{card.rentalPrice}</RentalPrice> */}
            {/* </TitleContainer> */}
            {/* <div>-</div>
            <div>1</div>
            <div>+</div> */}
            {/* <div>
              Додати до замовлення
            </div>           */}
            
            {/* <Ul>
              <Li>{productName(card.name)}</Li>
              <Li>{addressCountry(card.address)}</Li>
              <Li>{card.rentalCompany}</Li>
            </Ul>
            <Ul style={{ marginBottom: 0 }}>
              <Li>{card.type}</Li>
              <Li>{card.mileage}</Li>
              <Li
                // style={{
                //   overflow: "hidden",
                //   whiteSpace: "wrap",
                //   textOverflow: "ellipsis",
                // }}
              >
                {card.accessories[0]}
              </Li>
            </Ul> */}
          </OptionDiv>
          <p>Код: {card.code}</p>
          <Name>{card.name}</Name>
          <Memo>{card.memo}</Memo>


          {/* <Button type="button" onClick={onOpenModal}>
            Learn more
          </Button> */}
            
          </div>
        </DivHov>
      </Container>
      {/* {isModalShown && <CardModal card={card} onClose={onCloseModal} />} */}
    </>
  );
}