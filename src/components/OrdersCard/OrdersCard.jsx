import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrders, updateOrders } from 'redux/slice/orderSlice';
import { selectOrders } from 'redux/selectors';
import CardModal from 'components/ProductModal/ProductModal';
import CheckoutModal from 'components/-CheckoutModal/CheckoutModal';

import {
  Container,
  OptionDiv,
  PhotoDiv,
  OrdersDiv,
  Img,
  Input,
  QuantityDiv,
  Div,
  ButtonDiv,
  Name,
} from './OrdersCard.styled';

import noPhoto from 'assets/images/jpg/productPhotos/no_photo.jpg';
import lang from 'assets/json/language.json';
import { selectLanguages } from 'redux/selectors';

const Product = ({ card }) => {
  const dispatch = useDispatch();
  const orderProducts = useSelector(selectOrders);
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isCheckoutModalShown, setIsCheckoutModalShown] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  const [quantityGoods, setQuantityGoods] = useState(card.ordered);
  const [sum, setSum] = useState(card.price * card.ordered);

  useEffect(() => {
    const isCurrentOrder = orderProducts.find(order => order.id === card.id);
    if (isCurrentOrder) {
      setIsOrder(true);
    } else {
      setIsOrder(false);
    }
  }, [card, orderProducts]);

  const onCloseModal = () => {
    setIsModalShown(false);
    setIsCheckoutModalShown(false);
  };

  const onOpenModal = () => {
    setIsModalShown(true);
  };

  const onDelete = () => {
    dispatch(deleteOrders(card.id));
    setIsOrder(false);
    setQuantityGoods(1);
  };

  const handleChange = e => {
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

  return (
    <Container>
      <OptionDiv>
        <PhotoDiv>
          {card.photo === '' ? (
            <Img src={noPhoto} alt={card.name} />
          ) : (
            <Img src={card.photo} alt={card.name} />
          )}
          <div>
            <p>
              {lang[languages].productCard_codeTitle}: {card.code}
            </p>
            <Name onClick={onOpenModal}>{card.name}</Name>
          </div>
        </PhotoDiv>
        <OrdersDiv>
          <QuantityDiv>
            <Div onClick={decrease}> - </Div>
            <Input onChange={handleChange} value={Number(quantityGoods)} />
            <Div onClick={increase}> + </Div>
          </QuantityDiv>

          <div style={{ minWidth: '70px' }}>
            <p>{lang[languages].layout_sum}:</p>
            <p>{sum} грн.</p>
          </div>

          <ButtonDiv className={isOrder && 'isOrder'} onClick={onDelete}>
            {isOrder
              ? lang[languages].productCard_orderDel
              : lang[languages].productCard_orderAdd}
          </ButtonDiv>
        </OrdersDiv>
      </OptionDiv>
      {isModalShown && <CardModal card={card} onClose={onCloseModal} />}
      {isCheckoutModalShown && <CheckoutModal card={card} onClose={onCloseModal} />}
    </Container>
  );
};

export default Product;
