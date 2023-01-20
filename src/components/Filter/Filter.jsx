import { useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/fileterSlice';

import { FilterTitle, FilterForm, Label, Input } from './Filter.styled';

export const Filter = ({ title }) => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilterContacts(event.target.value));
  };
  return (
    <>
      <FilterTitle>{title} </FilterTitle>

      <FilterForm>
        <Label htmlFor="name">
          Name
          <Input
            onChange={handleFilter}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </Label>
      </FilterForm>
    </>
  );
};
