import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

import { Container } from './Container/Container.styled';
import { MainTitles, SecondTitles } from './Titles/Titles';
import { PhoneBookEditor } from './PhoneBookEditor/PhoneBookEditor';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitles title={'Phonebook'} />
      <PhoneBookEditor />
      <SecondTitles title={'Contacts'} />
      <Filter title={'Find contacts by name '} />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </Container>
  );
};
