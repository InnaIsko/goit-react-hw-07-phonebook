import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deliteContact } from 'redux/contactsSlice';
import { Contact, BtnDelite, ContactItem } from './ContactListItem.styled';

export function ContactListItem({ onContactInfo }) {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <Contact>
        {onContactInfo.name}: {onContactInfo.number}
      </Contact>
      <BtnDelite onClick={() => dispatch(deliteContact(onContactInfo.id))}>
        Delete
      </BtnDelite>
    </ContactItem>
  );
}
ContactListItem.propTypes = {
  onContactInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
