import PropTypes from 'prop-types';
import styles from './Contacts.module.scss';

export const Contacts = ({filterByName, toDelete }) =>(
    
  <ol className={styles.contacts}>
    {filterByName().map(({ name, number, id }) => (
      <li key={id} className={styles.contacts_item}>
        {name}: {number}
        <button
          type="submit"
          onClick={() => {
            toDelete(id);
          }}
          className={styles.btn}
        >
          Delete
        </button>
      </li>
      ))}
   </ol>
)

Contacts.propTypes = {
  filterByName: PropTypes.func.isRequired,
  toDelete: PropTypes.func.isRequired,
};
