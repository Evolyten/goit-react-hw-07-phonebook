import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contatsReducer';

const Filter = () => {
  const dispatch = useDispatch();
  function onChangeFilter(e) {
    let filterField = e.target.value;
    dispatch(filterContacts(filterField));
  }

  return (
    <input
      className={css.filter}
      type="text"
      name="filter"
      onChange={onChangeFilter}
    />
  );
};

export default Filter;
