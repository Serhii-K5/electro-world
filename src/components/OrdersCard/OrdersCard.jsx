import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrders, updateOrders, deleteAllOrders } from "redux/slice/orderSlice";
import { selectOrders } from "redux/selectors";
// import { selectOrdersAll } from "redux/selectors";
import CardModal from "components/ProductModal/ProductModal";
// import { changeQuantity } from "redux/slice/numberPurchasesSlice";
// import { increaseOrder, decreaseOrder } from "redux/slice/ordersAllSlice";

import {
  Container,
  // Aside,
  // ImgDiv,
  // DivHov,
  OptionDiv,
  Img,
  // OptionContainer,
  // Price,
  // PriceOld,
  Input,
  QuantityDiv,
  Div,
  ButtonDiv,
  Name,
  // Memo,
} from "./OrdersCard.styled";

import noPhoto from "../../assets/images/no_photo.jpg";
import lang from "assets/json/language.json";
import { selectLanguages } from "redux/selectors";

// export default function Product({ card }) {
const Product = ({ card }) => {
  const dispatch = useDispatch();
  const orderProducts = useSelector(selectOrders);
  const languages = useSelector(selectLanguages);
  // const ordersAll = useSelector(selectOrdersAll);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  // const [NumberPurchases, setNumberPurchases] = useState(0);
  // const [quantityGoods, setQuantityGoods] = useState(1);  
  const [quantityGoods, setQuantityGoods] = useState(card.ordered);  
  
  // const [isVisible, setIsVisible] = useState(false);
  const [sum, setSum] = useState(card.price * card.ordered);
  
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
  
  const onOpenModal = () => {
    setIsModalShown(true);
  };

  // const onAdd = () => {
  //   // card.ordered === 0 && (card.ordered = 1);
  //   // dispatch(addOrders(card));
  //   dispatch(addOrders({ ...card, ordered: quantityGoods }));
  //   setIsOrder(true);
  // };

  const onDelete = () => {
    dispatch(deleteOrders(card.id));
    setIsOrder(false);
    setQuantityGoods(1);
  };
  
  // const productName = (name) => {
  //   return name.replace('\"'/i,'"');
  // };

  // const onMouseMove = () => {
  //   setIsVisible(true);
  // };

  // const onMouseOut = () => {
  //   setIsVisible(false);
  // };
  
  const handleChange = (e) => {
    try {
      Number(e.target.value);
    } catch (error) {
      console.log(lang[languages].productCard_ordersInputLog, error);
    }
  };

  const decrease = () => {
    if (quantityGoods > 1) {
      dispatch(updateOrders({ ...card, ordered: quantityGoods - 1 }));
      setQuantityGoods(quantityGoods - 1);
      setSum(card.price * (quantityGoods - 1));
    }
  };
  
  const increase = () => {
    dispatch(updateOrders({ ...card, ordered: quantityGoods + 1 }));
    setQuantityGoods(quantityGoods + 1);
    setSum(card.price * (quantityGoods + 1));
  };

  const deletedOrders = () => {
    dispatch(deleteAllOrders([]));
  }
 
  return (
      <Container>
        <OptionDiv>
          <div style={{display: 'flex'}}>
            {card.photo === "" ?
              <Img src={noPhoto} alt={card.name} />
              : <Img src={card.photo} alt={card.name} />          
            }            
            <div>
              <p>{lang[languages].productCard_codeTitle}: {card.code}</p>
              <Name onClick={onOpenModal}>{card.name}</Name>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
            <QuantityDiv>
              <Div onClick={decrease}> - </Div>
              <Input
                onChange={handleChange}
                value= {Number(quantityGoods)}
              />
              <Div onClick={increase}> + </Div>
            </QuantityDiv>
            
            <div style={{minWidth: '70px'}}>
              <p>{lang[languages].layout_sum}:</p>
              {/* <p>{calculation()} грн.</p> */}
              <p>{sum} грн.</p>
            </div>
            
            <ButtonDiv 
              className={isOrder && "isOrder"}
              onClick={onDelete}
            >
              {isOrder ? 
                lang[languages].productCard_orderDel
                : lang[languages].productCard_orderAdd
              }
            </ButtonDiv> 
          </div>
        </OptionDiv>
        {isModalShown && <CardModal card={card} onClose={onCloseModal} />}
      </Container>
  );
}

export default Product;