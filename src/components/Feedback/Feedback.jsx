import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Overlay,
  ModalBacking,
  Modal,
  CloseBtn,
} from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';
import {
  Section,
  Form,
  P,
  Label,
  Input,
  Textarea,
} from "./Feedback.styled";

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

import cross from 'assets/images/svg/cross.svg';

const MessageModule = ({ onClose }) => {
  const languages = useSelector(selectLanguages);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Здесь вы можете добавить логику отправки данных на сервер или обработки формы
    console.log(formData);
    // Очистка формы после отправки
    setFormData({
      tel: '',
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <ModalBacking>
          <Modal style={{ maxWidth: '40vw' }}>
            <div
              style={{
                textAlign: 'center',
                backgroundColor: 'var(--bg-color-grey)',
              }}
            >
              <h1>{lang[languages].feedback_h1.toUpperCase()}</h1>
            </div>
            <CloseBtn type="button" onClick={onClose}>
              <img src={cross} alt="close button" />
            </CloseBtn>
            <Section>
              <P>{lang[languages].feedback_p1}</P>
              <Form onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="tel">Тел:</Label>
                  <Input
                    type="text"
                    id="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    required
                    style={{ marginLeft: '21px' }}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email:</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ marginLeft: '6px' }}
                  />
                </div>
                <div>
                  <Label htmlFor="name">Имя:</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ marginLeft: '14px' }}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение:</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    // style={{ marginLeft: '20px' }}
                  />
                </div>
                <button type="submit">Отправить</button>
              </Form>
            </Section>
          </Modal>
        </ModalBacking>
      </Overlay>
    </>
  );
};

export default MessageModule;
