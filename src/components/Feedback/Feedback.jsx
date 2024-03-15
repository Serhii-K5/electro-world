import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Overlay,
  ModalBacking,
  Modal,
  CloseBtn,
} from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';
import {
  Section,
  // Form,
  H2,
  P,
  // Label,
  // Input,
  // Textarea,
  // Btn
} from "./Feedback.styled";
import UserFormRegister from 'components/UserFormRegister/UserFormRegister';

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

  // const [formData, setFormData] = useState({
  //   tel: '',
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
    
    
  //   // Здесь вы можете добавить логику отправки данных на сервер или обработки формы
  //   console.log(formData);
  //   // Очистка формы после отправки
  //   setFormData({
  //     tel: '',
  //     name: '',
  //     email: '',
  //     message: '',
  //   });
  // };

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
              <H2>{lang[languages].NavLinkBar_message.toUpperCase()}</H2>
            </div>
            <CloseBtn type="button" onClick={onClose}>
              <img src={cross} alt="close button" />
            </CloseBtn>
            <Section>              
              <P>{lang[languages].feedback_p1}</P>
              <UserFormRegister typeMassege={''} />
            </Section>
          </Modal>
        </ModalBacking>
      </Overlay>
    </>
  );
};

export default MessageModule;
