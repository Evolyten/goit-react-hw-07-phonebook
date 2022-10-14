import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contactsOperation';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  phone: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter the name')
    .min(3, 'Name must have more the 3 letter')
    .max(30, 'Name must have less then 30 letter')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  phone: Yup.string()
    .required('Please enter the number')
    .min(6, 'Number of phone must have more then 6 number')
    .max(14, 'Number of phone must have less then 15 number')
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.item);

  const handleSubmit = (user, { resetForm }) => {
    if (contacts.some(contact => contact.name === user.name)) {
      toast.error(`${user.name} is already in contacts`);
      resetForm();
      return;
    }
    dispatch(addContact(user));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label className={css.label}>
          Number
          <Field className={css.input} type="tel" name="phone" />
          <ErrorMessage name="phone" />
        </label>
        <button className={css.btnSubmit} type="submit">
          add contact
        </button>
      </Form>
    </Formik>
  );
};
