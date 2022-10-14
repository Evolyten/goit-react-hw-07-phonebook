import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactBook/ContactListItem/ContactListItem';
const UserList = () => {
  const contacts = useSelector(state => state.contacts.item);
  const filter = useSelector(state => state.filter);

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
