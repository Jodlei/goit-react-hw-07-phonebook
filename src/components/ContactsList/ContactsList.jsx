import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  getContacts,
  getError,
  getIsLoading,
  getContactsFilter,
} from 'redux/selectors';

import { Loader } from 'components/Loader/Loader';

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
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {error && <p>Try again later</p>}
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <ContactList>
          {visibleContacts.map(({ id, name, phone }) => {
            return (
              <ContactItem key={id}>
                <NameValue>{name}</NameValue>
                <PhoneValue>{phone}</PhoneValue>
                <DeleteButton type="button" onClick={() => handleDelete(id)}>
                  Delete contact
                </DeleteButton>
              </ContactItem>
            );
          })}
        </ContactList>
      )}
    </>
  );
};
