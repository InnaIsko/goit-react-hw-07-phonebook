import { Box } from 'components/Box';

import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectIsError } from 'redux/selectors';

import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box pl="40px" pr="40px">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Sorry,{error}</b>}
      <ContactList />
      <Filter />
    </Box>
  );
}
