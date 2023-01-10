import { useState } from 'react';
import { Box } from 'components/Box';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContactsValue } from 'redux/contactsSlice';
import { Input, Label, BtnForm } from './Form. styled';

export function ContactForm() {
  const contacts = useSelector(getContactsValue);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const getInputValue = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const handleSabmit = event => {
    event.preventDefault();

    const nameValue = contacts.some(elem => elem.name === name);

    if (nameValue) {
      alert(`${name} is olredi in contacts`);
    } else {
      dispatch(addContact({ name, number, id: nanoid() }));
    }
    setName('');
    setNumber('');
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      action=""
      onSubmit={handleSabmit}
    >
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={getInputValue}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={getInputValue}
        />
      </Label>
      <BtnForm type="submit">Add Contact</BtnForm>
    </Box>
  );
}
