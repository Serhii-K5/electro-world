import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Form,
  Label,
  Input,
  PasswordDiv,
  InputDiv,
  InputPassword,
  Textarea,
  Btn,
  RemindPassword,
} from './UserFormRegister.styled';

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

// убрать после настройки отправки формы
import Stub from "components/Stub/Stub";

const UserFormRegister = ( {typeMassege}) => {
  const languages = useSelector(selectLanguages);
  const [isVisibility, setIsVisibility] = useState(false);
  // убрать после настройки отправки формы
  const [isStub, setIsStub] = useState(false);

  const [formData, setFormData] = useState({
    tel: '',
    name: '',
    email: '',
    password: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    const isValid = value !== '';
    validation(e, isValid);
    setFormData({ ...formData, [name]: value });
  };

  const validation = (e, isValid) => {
    const { className } = e.target;
    if (!className.includes('valid') && isValid) {
      e.target.className = className + ' valid';
    } else if (!className.includes('valid') && !isValid) {
      e.target.className = className + ' invalid';
    } else if (isValid) {
      e.target.className = className.replace('invalid', 'valid');
    } else {
      e.target.className = className.replace(' valid', ' invalid');
    }
  };

  const handleChangeTel = e => {
    const { name, value } = e.target;
    const phoneNumber = formatPhoneNumber(value);
    const isValid = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phoneNumber)
      ? true
      : false;
    validation(e, isValid);
    setFormData({ ...formData, [name]: formatPhoneNumber(phoneNumber) });
  };

  const handleChangeEmail = e => {
    const { name, value } = e.target;
    const isValid =
      value.length > 5 && value.includes('@') && value.includes('.');
    validation(e, isValid);
    setFormData({ ...formData, [name]: value });
  };

  const handleChangePasword = e => {
    const { name, value } = e.target;
    const isValid = value.length > 5;
    validation(e, isValid);
    setFormData({ ...formData, [name]: value });
  };

  // убрать после настройки отправки формы
  const onCloseModal = () => {
    setIsStub(false);
  };

  // убрать/переделать после настройки отправки пароля
  const onOpenModal = () => {
    setIsStub(true);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // убрать после настройки отправки формы
    setIsStub(true);
    // Здесь вы можете добавить логику отправки данных на сервер или обработки формы
    console.log(formData);

    // Очистка формы после отправки
    setFormData({
      tel: '',
      name: '',
      email: '',
      password: '',
      message: '',
    });
  };

  // Функция для форматирования номера телефона
  const formatPhoneNumber = phoneNumber => {
    // Очистка от ненужных символов
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Добавление шаблона
    if (cleanedPhoneNumber.length === 0 || cleanedPhoneNumber === '38') {
      return '+38(';
    } else if (cleanedPhoneNumber.length === 1) {
      return `+38(${cleanedPhoneNumber}`;
    } else if (cleanedPhoneNumber.length === 5) {
      return `+38(${cleanedPhoneNumber.slice(2)})`;
    } else if (cleanedPhoneNumber.length < 6) {
      return `+38(${cleanedPhoneNumber.slice(2)}`;
    } else if (cleanedPhoneNumber.length === 8) {
      return `+38(${cleanedPhoneNumber.slice(2, 5)})-${cleanedPhoneNumber.slice(
        5
      )}-`;
    } else if (cleanedPhoneNumber.length < 8) {
      return `+38(${cleanedPhoneNumber.slice(2, 5)})-${cleanedPhoneNumber.slice(
        5
      )}`;
    } else if (cleanedPhoneNumber.length === 10) {
      return `+38(${cleanedPhoneNumber.slice(2, 5)})-${cleanedPhoneNumber.slice(
        5,
        8
      )}-${cleanedPhoneNumber.slice(8)}-`;
    } else if (cleanedPhoneNumber.length < 10) {
      return `+38(${cleanedPhoneNumber.slice(2, 5)})-${cleanedPhoneNumber.slice(
        5,
        8
      )}-${cleanedPhoneNumber.slice(8)}`;
    } else if (cleanedPhoneNumber.length > 12) {
      return `+38(${cleanedPhoneNumber.slice(2, 5)})-${cleanedPhoneNumber.slice(
        5,
        8
      )}-${cleanedPhoneNumber.slice(8, 10)}-${cleanedPhoneNumber.slice(
        10,
        12
      )}`;
    } else {
      return `+38(${cleanedPhoneNumber.slice(2, 5)})-${cleanedPhoneNumber.slice(
        5,
        8
      )}-${cleanedPhoneNumber.slice(8, 10)}-${cleanedPhoneNumber.slice(10)}`;
    }
  };

  const clickVisibility = () => {
    setIsVisibility(!isVisibility);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="tel" style={{ marginRight: '30px' }}>
            Тел: *
          </Label>
          <Input
            type="text"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChangeTel}
            placeholder="+38(0__)___-__-__"
            required
            title={lang[languages].feedback_title1}
          />
        </div>
        {typeMassege !== 'quickOrder' && (
          <div>
            <Label htmlFor="email" style={{ marginRight: '29px' }}>
              Email:
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChangeEmail}
              // required
              placeholder="support@mail.com"
              title={lang[languages].feedback_title3}
            />
          </div>
        )}
        {typeMassege !== 'quickOrder' && typeMassege !== 'regular' && (
          <div>
            <Label htmlFor="name" style={{ marginRight: '28px' }}>
              {lang[languages].feedback_name} *
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={lang[languages].feedback_placeholder3}
              title={lang[languages].feedback_title2}
            />
          </div>
        )}
        {(typeMassege === 'new' || typeMassege === 'regular') && (
          <PasswordDiv>
            <Label htmlFor="password" style={{ marginRight: '22px' }}>
              Пароль: *
            </Label>
            <InputDiv>
              <InputPassword
                type={isVisibility ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChangePasword}
                required
                placeholder="******"
                title={lang[languages].feedback_title4}
              />
              <div onClick={clickVisibility}>
                {isVisibility ? (
                  <MdOutlineVisibility
                    style={{ fontSize: '25px', marginLeft: '-30px' }}
                  />
                ) : (
                  <MdOutlineVisibilityOff
                    style={{ fontSize: '25px', marginLeft: '-30px' }}
                  />
                )}
              </div>
            </InputDiv>
          </PasswordDiv>
        )}
        {typeMassege === 'regular' && (
          <RemindPassword onClick={onOpenModal}>
            <span>
              <u>{lang[languages].feedback_RemindPassword}</u>
            </span>
          </RemindPassword>
        )}
        <div>
          <Label htmlFor="message">{lang[languages].feedback_massage} *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={lang[languages].feedback_placeholder5}
            title={lang[languages].feedback_title2}
          />
        </div>
        <p>* - {lang[languages].feedback_p2}</p>
        <Btn type="submit">{lang[languages].feedback_btn}</Btn>
      </Form>
      {/* убрать после настройки отправки формы*/}
      {isStub && <Stub onClose={onCloseModal} />}
    </>
  );
};

export default UserFormRegister;
