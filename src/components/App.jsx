import React from 'react';

import { ContactForm } from './ContactBook/ContactForm/ContactForm';
import UserList from './ContactBook/ContactList/ContactList';
import Filter from './ContactBook/Filter/Filter';
import css from './ContactBook/ContactBook.module.css';
import { Section } from './Section/Section';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { fetchContact } from 'redux/contactsOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from './ContactBook/Loader/Loader';

export default function App() {
  const contacts = useSelector(state => state.contacts.item);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <div className={css.contact_wrap}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading ? <Loader /> : !!contacts.length && <UserList />}
      </Section>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}
