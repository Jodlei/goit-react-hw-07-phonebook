import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

import {
  Label,
  Input,
  PhoneBookForm,
  SubmitButton,
} from './PhoneBookEditor.styled';

export const PhoneBookEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    if (
      contacts.map(item => item.name.toLowerCase()).includes(name.toLowerCase())
    ) {
      alert(name + 'is already in contacts!');
    } else {
      dispatch(addContact({ name, phone }));
    }
    form.reset();
  };

  return (
    <PhoneBookForm onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="phone">
        Number
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </PhoneBookForm>
  );
};
