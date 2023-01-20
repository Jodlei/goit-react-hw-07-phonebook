import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  getContacts,
  // getError,
  // getIsLoading,
  getContactsFilter,
} from 'redux/selectors';

import {
  ContactList,
  ContactItem,
  NameValue,
  PhoneValue,
  DeleteButton,
} from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getContactsFilter);
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts();
  console.log(contacts);

  return (
    <ContactList>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <NameValue>{name}</NameValue>
            <PhoneValue>{number}</PhoneValue>
            <DeleteButton type="button" onClick={() => handleDelete(id)}>
              Delete contact
            </DeleteButton>
          </ContactItem>
        );
      })}
    </ContactList>
  );
};
