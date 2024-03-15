import { Span } from './AuthenticationType.styled';

const TypeAuthentification = ({handleSelect}) => {

  
  return (
    <>
      <Span
        id="new"
        onClick={() => handleSelect('new')}
        style={{ padding: '10px 10px' }}
      >
        <u>Новый клиент</u>
      </Span>
      <Span
        id="regular"
        onClick={() => handleSelect('regular')}
        style={{ padding: '10px 10px' }}
      >
        <u>Постоянный покупатель</u>
      </Span>
      <Span
        id="quickOrder"
        onClick={() => handleSelect('quickOrder')}
        style={{ padding: '10px 10px' }}
      >
        <u>Быстрый заказ</u>
      </Span>
    </>
  );
};

export default TypeAuthentification;