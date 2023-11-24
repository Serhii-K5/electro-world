import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders, deleteOrders } from "redux/slice/orderSlice";
import { selectOrders } from "redux/selectors";
// import CardModal from "components/ProductModal/ProductModal";
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
import alternative from "../../assets/images/svg/alternativeProducts.svg";
// import related from "../../assets/images/svg/relatedProducts.svg";
import related from "../../assets/images/svg/link1.svg";
import sprite from "../../assets/images/svg/sprite.svg";

export default function Product({ card }) {
  const dispatch = useDispatch();
  const orderProducts = useSelector(selectOrders);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isCurrentOrder = orderProducts.find(
      (order) => order.id === card.id
    );
    if (isCurrentOrder) {
      setIsOrder(true);
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
    // setIsVisible(false);
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
              {/* <div style={{width: '25px', height: '25px'}}> */}
                <ImgAside src={alternative} alt={"alternative products"}
                  style={{fill: "inherit"}}
                />
              {/* </div> */}
              <svg>              
                <use href={sprite + '#link'}></use>
            </svg>
            </ImgDiv>
            <svg width="50" height="50">
              {/* <use xlink:href="../../assets/images/svg/sprite.svg#link"></use> */}
              <use href={sprite + '#link'}></use>
            </svg>
            <p>Альтернативы</p>
            {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
 viewBox="0 0 25.000000 25.000000"
 preserveAspectRatio="xMidYMid meet"> */}

{/* <g transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)"> */}
{/* <g transform="scale(0.100000,-0.100000)">
<path d="M210.2 179.4c-17.7 3.4-33.3 10.1-46.1 19.7-10.7 8-140.6 138.6-145.7 146.4-15.3 23.7-21.2 49.9-16.9 76.1 2 12.7 4.9 21.4 10.7 32.6 18.5 35.5 55.1 57.8 94.9 57.8 21.2 0 45.7-8.2 62.8-21 3.6-2.7 22.4-20.8 41.7-40.2 34.8-34.9 35.2-35.4 36.3-40.7 1.3-6.3.2-11.7-3.6-17.3-3.1-4.6-11.1-8.8-16.7-8.8-8.5.1-11.3 2.3-48.1 38.9-37.3 37.1-39.2 38.5-54.5 43.7-8.3 2.8-28.1 2.7-37.5-.3C68.3 460.2 52 444 45.9 425c-1.4-4.1-2.3-10.3-2.6-17-.6-12.7.8-19.6 6.8-32l4.1-8.5 67.7-67.6 67.6-67.7 8.5-4.1c11-5.3 18.4-7.1 29.1-7.1 15.9 0 29.4 4.9 42 15.4 8.5 7.1 12.3 8.9 18.4 8.9 8.9 0 15.9-4.6 19.6-12.8 2.2-4.6 2.4-9.2.7-14.6-3.6-12.2-30.7-30.4-54.3-36.5-12.4-3.2-32.1-4.1-43.3-2z"/>
<path d="M388.2 1.4c-15.8 3.1-29.6 8.4-41.6 16.3-5 3.3-19.5 17-49.9 47.2-39.6 39.5-42.9 43-44.3 47.6-3 10.2 1.3 20.2 10.7 24.9 3.1 1.5 6.9 2.6 9.3 2.6 8.7-.1 11-2 54.1-44.9 40.1-40 41.2-40.9 49.5-45 12.3-5.9 19.3-7.4 32-6.8 6.7.3 12.9 1.2 17 2.6 19 6.1 35.2 22.4 41.3 41.6 1.8 5.7 2.2 9.3 2.2 19.5 0 13.9-1 18.2-7.3 30.5-3.2 6.4-9.4 12.9-77.1 80.7l-73.6 73.6-9.5 4.5c-11.2 5.4-17 6.7-28.8 6.7-15.2 0-28.9-5.1-41.3-15.3-3.6-3-7.6-6-8.9-6.7-10.2-5.5-23.2-1.2-28.5 9.3-2.7 5.5-3.1 9.9-1.4 16.2 2.1 7.9 21.3 23.3 37.8 30.5 34.7 15.1 76 10.4 106-12 9.9-7.3 152.9-151.2 157.7-158.5 8.8-13.7 14.1-27.2 16.9-43.2 6.5-37.5-9.7-78-40.8-101.4-10.6-8-25.6-15.2-38.2-18.5-12.5-3.2-32.2-4.1-43.3-2z"/>
</g>
</svg> */}
            {/* <ImgDiv> */}
              {/* <div style={{ width: '25px', height: '25px' }}> */}
                {/* <ImgAside src={related} alt={"related products"}  */}
                {/* <ImgAside src={"../../assets/images/svg/link1.svg"} alt={"related products"} 
                // style={{ fill: "red" }}
              />                  */}
              {/* </div> */}
            {/* </ImgDiv> */}
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