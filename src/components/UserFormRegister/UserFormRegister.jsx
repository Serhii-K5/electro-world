import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Form,
  Label,
  Input,
  Textarea,
  Btn,
} from './UserFormRegister.styled';

import { selectLanguages } from 'redux/selectors';
import lang from 'assets/json/language.json';

const UserFormRegister = ( {typeMassege}) => {
  const languages = useSelector(selectLanguages);

  const [formData, setFormData] = useState({
    tel: '',
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
  
  console.log(lang[languages]);
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="tel" style={{ marginRight: '29px' }}>
          Тел: *
        </Label>
        <Input
          type="text"
          id="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          // placeholder={lang[languages].feedback_placeholder1}
          placeholder="+38(0XX)XXX-XX-XX"
          required
          // title="Вводите только цифры в формате 380ХХХХХХХХХ"
          title={lang[languages].feedback_title1}
        />
      </div>
      {typeMassege !== 1 && (
        <div>
          <Label htmlFor="email" style={{ marginRight: '15px' }}>
            Email: *
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="support@mail.com"
            title={lang[languages].feedback_title2}
          />
        </div>
      )}
      {typeMassege !== 2 && (
        <div>
          <Label htmlFor="name" style={{ marginRight: '23px' }}>
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
      <div>
        <Label htmlFor="message">{lang[languages].feedback_massage} *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder={lang[languages].feedback_placeholder4}
          title={lang[languages].feedback_title2}
        />
      </div>
      <p>* - {lang[languages].feedback_p2}</p>
      <Btn type="submit">{lang[languages].feedback_btn}</Btn>
    </Form>
  );
};

export default UserFormRegister;
