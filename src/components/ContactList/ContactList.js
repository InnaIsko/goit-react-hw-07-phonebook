import { ContactListItem } from './ContactListItem';
import { useSelector } from 'react-redux';
import { getContactsValue, getFilterValue } from 'redux/contactsSlice';

export function ContactList() {
  const contacts = useSelector(getContactsValue);
  const filterValue = useSelector(getFilterValue);

  const filter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul>
      {filter.map(contact => (
        <ContactListItem onContactInfo={contact} key={contact.id} />
      ))}
    </ul>
  );
}
