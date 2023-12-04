import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders, deleteOrders } from "redux/slice/orderSlice";
import { selectOrders } from "redux/selectors";
// import { selectOrdersAll } from "redux/selectors";
import CardModal from "components/ProductModal/ProductModal";
// import { changeQuantity } from "redux/slice/numberPurchasesSlice";
// import { increaseOrder, decreaseOrder } from "redux/slice/ordersAllSlice";

import {
  Container,
  Aside,
  ImgDiv,
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
} from "./OrdersCard.styled";

import noPhoto from "../../assets/images/no_photo.jpg";
import lang from "assets/json/language.json";
import { selectLanguages } from "redux/selectors";

export default function Product({ card }) {
  const dispatch = useDispatch();
  const orderProducts = useSelector(selectOrders);
  const languages = useSelector(selectLanguages);
  // const ordersAll = useSelector(selectOrdersAll);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  // const [NumberPurchases, setNumberPurchases] = useState(0);
  const [qualitity, setQqualitity] = useState(1);  
  
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
  
  // const productName = (name) => {
  //   return name.replace('\"'/i,'"');
  // };
  
  const onOpenModal = () => {
    setIsModalShown(true);
  };

  const onMouseMove = () => {
    setIsVisible(true);
  };

  const onMouseOut = () => {
    setIsVisible(false);
  };
  
  const handleChange = (e) => {
    try {
      Number(e.target.value);
      // e.target.value = e.target.value;
    } catch (error) {
      // console.log("Значення не є числом. ", error);
      console.log(lang[languages].productCard_ordersInputLog, error);
    }
  }

  const handleClick = () => {
    {
      isOrder ? onDelete() : onAdd();
    }
  }

  const decrease = () => {
    if (qualitity > 1) {
      setQqualitity(qualitity - 1);
      card.ordered = qualitity - 2;
    } else if (qualitity === 1) {
      card.ordered = qualitity - 1;
     }
  }
  
  const increase = () => {
    setQqualitity(qualitity + 1);
    card.ordered = qualitity + 1;
  } 

  return (
    <>
      <Container>
        <OptionDiv>
          {card.photo === "" ?
            <Img src={noPhoto} alt={card.name} />
            : <Img src={card.photo} alt={card.name} />          
          }
          <OptionContainer>
            <p>{lang[languages].productCard_codeTitle}: {card.code}</p>
            <Name onClick={onOpenModal}>{card.name}</Name>
            
            <QuantityDiv>
              <Div
                    // style={isVisible ? {display: isOrder ? "none" : "flex",  color: "var(--text-color-primary-black)", borderColor: "var(--text-color-grey)"} : { color: "white", borderColor: "white" }} 
                    // onClick={e => qualitity > 1 && setQqualitity(qualitity - 1)}
                    // onClick={e => qualitity > 1 && (setQqualitity(qualitity - 1), card.ordered = qualitity - 2)}
                    // onClick={e => qualitity > 1 ? (setQqualitity(qualitity - 1), card.ordered = qualitity - 2) : qualitity === 1 && (card.ordered = qualitity - 1)} 
                    onClick={decrease}
                  >
                    -
                  </Div>
                  <Input
                    // type="number"
                    // defaultValue={1}
                    // defaultValue={qualitity}  
                    // style={isVisible ? {color: "var(--text-color-primary-black)", borderColor: "var(--text-color-grey)"} : isOrder ? {color: "var(-text-color-white)", borderColor: "var(-text-color-white)"} : {color: "white", borderColor: "white"}}
                    onChange={handleChange}
                    // value= {qualitity}
                    // value= {card.ordered === 0 ? card.ordered + 1 : card.ordered}
                    value= {card.ordered ? card.ordered : 1}
                  />
                  <Div  
                    // style={isVisible ? {display: isOrder ? "none" : "flex", color: "var(--text-color-primary-black)", borderColor: "var(--text-color-grey)"} : {display: isOrder ? "none" : "flex", color: "white", borderColor: "white"}}
                      // onClick={e => (setQqualitity(qualitity + 1))}
                      // onClick={e => (setQqualitity(qualitity + 1), card.ordered = qualitity + 1)} 
                    onClick={increase}
                  >
                    +
                  </Div>
                </QuantityDiv>
                
              <ButtonDiv 
                className={isOrder && "isOrder"}
                onClick={handleClick}
                // style={{ backgroundColor: isOrder ? "var(--bg-second-orange)" : "var(--bg-second-green)" }}
              >
              {isOrder ? 
                // "Видалити замовлення" 
                // : "Додати до замовлення"
                lang[languages].productCard_orderDel
                : lang[languages].productCard_orderAdd
              }
              </ButtonDiv> 
          </OptionContainer>
        </OptionDiv>
        

 
      </Container>
      {isModalShown && <CardModal card={card} onClose={onCloseModal} />}
    </>
  );
}