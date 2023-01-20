import { Container } from './Container/Container.styled';
import { MainTitles, SecondTitles } from './Titles/Titles';
import { PhoneBookEditor } from './PhoneBookEditor/PhoneBookEditor';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container>
      <MainTitles title={'Phonebook'} />
      <PhoneBookEditor />
      <SecondTitles title={'Contacts'} />
      <Filter title={'Find contacts by name '} />
      <ContactsList />
    </Container>
  );
};
