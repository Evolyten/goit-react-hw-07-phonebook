import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsOperation';
import { useDeleteContactsMutation } from 'redux/contatsReducer';

export function ContactListItem({ user }) {
  // const dispatch = useDispatch();
  const [deleteContact, result] = useDeleteContactsMutation();

  const { id, name, phone } = user;
  return (
    <li className={css.user_item}>
      {name}: <span>{phone}</span>
      {!result.isLoading ? (
        <button
          className={css.user_delete_btn}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      ) : (
        'Loading...'
      )}
    </li>
  );
}

ContactListItem.propTypes = {
  user: PropTypes.object,
};
