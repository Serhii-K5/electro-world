import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders, deleteOrders } from "redux/slice/orderSlice";
import { selectOrders } from "redux/selectors";
import CardModal from "components/ProductModal/ProductModal";

import {
  Container,
  Aside,
  ImgDiv,
  ImgDiv1,
  DivHov,
  // OptionDiv,
  Img,
  // OptionContainer,
  Price,
  PriceOld,
  PriceOld1,
  Input,
  QuantityDiv,
  Div,
  ButtonDiv,
  Name,
  Memo,
} from "./ProductCardLines.styled";

import noPhoto from "../../assets/images/no_photo.jpg";

import lang from "assets/json/language.json";
import { selectLanguages } from "redux/selectors";

export default function Product({ card, index }) {
  const dispatch = useDispatch();
  const orderProducts = useSelector(selectOrders);
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [quantityGoods, setQuantityGoods] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    const isCurrentOrder = orderProducts.find(
      (order) => order.id === card.id
    );
    if (isCurrentOrder) {
      setIsOrder(true);
      setQuantityGoods(isCurrentOrder.ordered);
    } else {
      setIsOrder(false);
    }
  }, [card, orderProducts]);
  
  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onAdd = () => {
    dispatch(addOrders({ ...card, ordered: quantityGoods }));
    setIsOrder(true);
  };

  const onDelete = () => {
    dispatch(deleteOrders(card.id));
    setIsOrder(false);
    setQuantityGoods(1);
  };
  
  const handleChange = (e) => {
    try {
      Number(e.target.value);
    } catch (error) {
      console.log(lang[languages].productCard_ordersInputLog, error);
    }
  };
  
  const decrease = () => {
    if (quantityGoods > 1) {
      setQuantityGoods(quantityGoods - 1);
    }
  };
  
    const handleClick = () => {
      isOrder ? onDelete() : onAdd();
    };
  
  const increase = () => {
    setQuantityGoods(quantityGoods + 1);
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
      {/* <Container style={{top: `${200*index}px`}}> */}
      <Container>
        <DivHov onMouseMove={onMouseMove} onMouseOut={onMouseOut}>        
          {isVisible && <Aside>
            {card.photoPackage && <Img src={card.photoPackage} alt={card.name} />}
            <ImgDiv>
              <ImgDiv1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.1 490.1"><path d="M194.5 324.35l15-24.2c3.6-5.8 1.8-13.3-4-16.9-5.7-3.6-13.3-1.8-16.9 4l-15 24.2c-27.2 43.9-66 69.1-106.6 69.1H12.2c-6.8 0-12.2 5.5-12.2 12.3s5.5 12.3 12.2 12.3h54.9c49.3-.2 95.7-29.6 127.4-80.8zM486.4 88.75L427 29.25c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l38.6 38.6H391.4c-49.2 0-95.7 29.4-127.4 80.6l-9.2 14.9c-3.6 5.8-1.8 13.3 4 16.9 2 1.2 4.2 1.8 6.4 1.8 4.1 0 8.1-2.1 10.4-5.8l9.2-14.9c27.2-43.9 66-69 106.6-69H448.2l-38.6 38.6c-4.8 4.8-4.8 12.5 0 17.3 2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l59.5-59.5c4.7-4.8 4.7-12.6-.1-17.3zm-26.1 8.8v-.2-.2l.2.2-.2.2z"></path><path d="M409.6 460.85c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l59.5-59.5c4.8-4.8 4.8-12.5 0-17.3l-59.5-59.4c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l38.6 38.6h-55.1c-40.5 0-79.4-25.2-106.6-69.1l-90.2-145.7c-31.7-51.3-78.2-80.6-127.4-80.6H12.2c-6.8 0-12.2 5.5-12.2 12.3s5.5 12.3 12.2 12.3h56.7c40.5 0 79.4 25.2 106.6 69l90.2 145.7c31.7 51.3 78.2 80.7 127.4 80.7h55.1l-38.6 38.6c-4.7 4.6-4.7 12.3 0 17.1zm50.7-68.3l.2.2-.2.2v-.2-.2z"></path></svg>
              </ImgDiv1>
            </ImgDiv>
            {/* <p>Альтернативы</p> */}
            <p>{lang[languages].productCard_alternatives}</p>
            <ImgDiv>
              <ImgDiv1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.971 54.971"><path d="M51.173 3.801c-5.068-5.068-13.315-5.066-18.384 0l-9.192 9.192a2 2 0 1 0 2.828 2.828l9.192-9.192a8.938 8.938 0 0 1 6.363-2.622c2.413 0 4.673.932 6.364 2.623s2.623 3.951 2.623 6.364a8.934 8.934 0 0 1-2.623 6.363L36.325 31.379c-3.51 3.508-9.219 3.508-12.729 0a2 2 0 1 0-2.828 2.828c2.534 2.534 5.863 3.801 9.192 3.801s6.658-1.267 9.192-3.801l12.021-12.021c2.447-2.446 3.795-5.711 3.795-9.192 0-3.482-1.348-6.746-3.795-9.193z"></path><path d="M27.132 40.57l-7.778 7.778a8.935 8.935 0 0 1-6.364 2.623 8.937 8.937 0 0 1-6.364-2.623c-3.509-3.509-3.509-9.219 0-12.728L17.94 24.306a8.938 8.938 0 0 1 6.364-2.622c2.412 0 4.672.932 6.363 2.622a2 2 0 1 0 2.828-2.828c-5.067-5.067-13.314-5.068-18.384 0L3.797 32.793C1.351 35.239.003 38.504.003 41.985c0 3.48 1.348 6.745 3.795 9.191a12.905 12.905 0 0 0 9.191 3.795c3.481 0 6.746-1.348 9.192-3.795l7.778-7.778a2 2 0 0 0-2.827-2.828z"></path></svg>
              </ImgDiv1>
            </ImgDiv>
            {/* <p>Связанные</p> */}
            <p>{lang[languages].productCard_related}</p>
          </Aside>}
          <div style={{display: 'flex', gap: '16px', justifyContent: 'space-between'}}>          
            {card.photo === "" ?
              <Img src={noPhoto} alt={card.name} />
              : <Img src={card.photo} alt={card.name} />          
            }
            <div style={{marginRight: 'auto'}}>
              {/* <p>Код: {card.code}</p> */}
              <p>{lang[languages].productCard_codeTitle}: {card.code}</p>
              <Name onClick={onOpenModal}>{card.name}</Name>
              <Memo>{card.memo}</Memo> 
            </div>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap'}}>
              <div style={{width: '90px'}}>
                <div style={{display: 'flex', gap: '16px'}}>
                  <PriceOld>{card.price}</PriceOld> <PriceOld1>грн.</PriceOld1>
                </div>
                <div style={{display: 'flex', gap: '5px'}}>
                  <Price>{card.price}</Price> <Price>грн.</Price>
                </div>
              </div>
              <QuantityDiv>
                <Div
                  style={isVisible ? {display: isOrder ? "none" : "flex",  color: "var(--text-color-primary-black)", borderColor: "var(--text-color-grey)"} : { color: "white", borderColor: "white" }} 
                  onClick={decrease}
                >-</Div>
                <Input
                  // type="number"
                  // defaultValue={quantityGoods}  
                  style={isVisible || isOrder ? {color: "var(--text-color-primary-black)", borderColor: "var(--text-color-grey)"} : isOrder ? {color: "var(-text-color-white)", borderColor: "var(-text-color-white)"} : {color: "white", borderColor: "white"}}
                  onChange={handleChange}
                  value= {Number(quantityGoods)}
                />
                <Div  
                  style={isVisible ? {display: isOrder ? "none" : "flex", color: "var(--text-color-primary-black)", borderColor: "var(--text-color-grey)"} : {display: isOrder ? "none" : "flex", color: "white", borderColor: "white"}}
                  onClick={increase}
                >+</Div>
              </QuantityDiv>    
              <ButtonDiv 
                className={isOrder && "isOrder"}
                onClick={handleClick}
                // style={{ backgroundColor: isOrder ? "var(--bg-second-orange)" : "var(--bg-second-green)" }}
              >
                {isOrder ? 
                  // "Видалити замовлення" : "Додати до замовлення"
                  lang[languages].productCard_orderDel
                  : lang[languages].productCard_orderAdd
                }
              </ButtonDiv> 
              {/* <OptionDiv>
                <OptionContainer>
                  <hr />                          
                </OptionContainer>
              </OptionDiv> */}  
            </div>  
          </div>
        </DivHov>
      </Container>
      {isModalShown && <CardModal card={card} onClose={onCloseModal} />}
    </>
  );
}