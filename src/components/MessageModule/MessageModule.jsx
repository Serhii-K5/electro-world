import { useEffect, useState } from "react";
import {
  Overlay,
  Modal,
  CloseBtn,
} from "components/ConstComponentsStyle/ConstComponentsStyle.styled";

import cross from "assets/images/svg/cross.svg";

const MessageModule = ({ onClose }) => {
  
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете добавить логику отправки данных на сервер или обработки формы
    console.log(formData);
    // Очистка формы после отправки
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };



  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <Modal>
          <CloseBtn type="button" onClick={onClose}>
            <img src={cross} alt="close button" />
          </CloseBtn>
          
          <p>Message module</p>
          <h2 style={{margin: '50px auto', textAlign: 'center', fontSize: '50px'}}>Page under construction</h2>
        
        
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Сообщение:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Отправить</button>
          </form>
        </Modal>
      </Overlay>

    </>
  );
};

export default MessageModule;
