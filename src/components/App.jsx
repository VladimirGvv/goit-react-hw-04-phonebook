import React, { useState, useEffect } from 'react';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts";
import styles from './App.module.scss';




export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsStored = localStorage.getItem('contacts');
    const storageContacts = JSON.parse(contactsStored);
    storageContacts !== []
      ? setContacts(storageContacts)
      : setContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const filterByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactSubmit = values => {
    const nameArray = contacts.map(contact => {
      return contact.name;
    });
    if (nameArray.includes(values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }
    return setContacts([values, ...contacts]);
  };

  const toDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

    return (
      <div className={styles.phone_form}>
        <h1>Phonebook</h1>
        <PhoneForm onSubmit={contactSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} filterByName={handleChange} />
        <Contacts filterByName={filterByName} toDelete={toDelete} />
      </div>
    );
};
