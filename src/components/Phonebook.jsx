import React from 'react';
import { ContactList } from './ContactList';
import FilterContacts from './FilterContacts';

import { ContactForm } from './ContactForm';
import { nanoid } from 'nanoid';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleOnSubmitAdd = ({ name, number }) => {
    const alreadyAddedContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (alreadyAddedContact) {
      alert(`Contact with name "${name}" already exists in the phonebook.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id: nanoid() }],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => {
      const updatedContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: updatedContacts };
    });
  };

  handleFilterChange = filterValue => {
    this.setState({ filter: filterValue });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <ContactForm onSubmit={this.handleOnSubmitAdd} />
        <FilterContacts onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Phonebook;
