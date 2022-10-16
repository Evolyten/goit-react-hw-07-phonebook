import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactBook/ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/contactsSelectors';

const UserList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  function renderByFilter() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <ul className={css.user_list}>
      {renderByFilter().map(contact => (
        <ContactListItem key={contact.id} user={contact} />
      ))}
      {}
    </ul>
  );
};

export default UserList;
