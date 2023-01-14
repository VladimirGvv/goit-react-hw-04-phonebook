import PropTypes from 'prop-types';
import styles from './Filter.module.scss';


export const Filter = ({ filterByName, value }) => (
  <>
    <p>Find contacts by name</p>
    <input
      type="text"
      name="filter"
      value={value}
      onChange={filterByName}
      className={styles.input}
    ></input>
  </>
);

Filter.propTypes = {
    filterByName: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};