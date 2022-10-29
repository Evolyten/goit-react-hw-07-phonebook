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
import { getContacts, getIsLoading } from '../redux/contactsSelectors';
import { useGetContactsQuery } from 'redux/contatsReducer';
export default function App() {
  // const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getIsLoading);
  // const dispatch = useDispatch();
  const { data, error, isLoading } = useGetContactsQuery();

  // useEffect(() => {
  //   dispatch(fetchContact());
  // }, [dispatch]);
  return (
    <div className={css.contact_wrap}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <UserList />
        {isLoading && <Loader />}
      </Section>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}
