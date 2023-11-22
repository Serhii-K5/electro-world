import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders, deleteOrders } from "redux/slice/orderSlice";
import { selectOrders } from "redux/selectors";
// import CardModal from "components/ProductModal/ProductModal";
import {
  Container,
  // OrderBtn,
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
import noPhoto from "../../assets/image/no_photo.jpg";

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
    setIsVisible(false);
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
          
        </DivHov>
      </Container>
      {/* {isModalShown && <CardModal card={card} onClose={onCloseModal} />} */}
    </>
  );
}