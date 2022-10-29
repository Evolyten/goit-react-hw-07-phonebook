import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactBook/ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/contactsSelectors';
import { useGetContactsQuery } from 'redux/contatsReducer';

const UserList = () => {
  // const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const { data, error, isLoading } = useGetContactsQuery();
  function renderByFilter() {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <ul className={css.user_list}>
      {data &&
        renderByFilter().map(contact => (
          <ContactListItem key={contact.id} user={contact} />
        ))}
      {}
    </ul>
  );
};

export default UserList;
