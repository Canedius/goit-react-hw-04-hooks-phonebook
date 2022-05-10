import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
function Contacts({ contacts, children, deleteContacts }) {
  return (
    <div className={s.wrap}>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              {name}: {number}{' '}
              <button onClick={() => deleteContacts(id)}>Delete</button>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  children: PropTypes.node,
  deleteContacts: PropTypes.func,
};
export default Contacts;
