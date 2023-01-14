import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './PhoneForm.module.scss';

export function PhoneForm ({onSubmit}) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
    
  const ContactInputId = nanoid();

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(contact);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={ContactInputId} className={styles.label}>Name</label>

      <input
        id={ContactInputId}
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={styles.input}
      />

      <label htmlFor={ContactInputId} className={styles.label}>Number</label>

      <input
        id={ContactInputId}
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={styles.input}
      />

      <button type="submit" className={styles.btn}>Add contact</button>
    </form>
  );
}

PhoneForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};