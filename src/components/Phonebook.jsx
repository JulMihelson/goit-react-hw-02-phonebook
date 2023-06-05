import React from 'react';
import { ContactList } from './ContactList';
import FilterContacts from './FilterContacts';
import { nanoid } from 'nanoid';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleOnSubmitAdd = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    const alreadyAddedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (alreadyAddedContact) {
      alert(`Contact with name "${name}" already exists in the phonebook.`);
      return;
    }

    this.setState({
      contacts: [...contacts, { name, number, id: nanoid() }],
      name: '',
      number: '',
    });
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
        <form onSubmit={this.handleOnSubmitAdd}>
          <div>Phonebook</div>
          <label>
            Name
            <input
              onChange={this.handleInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\d{1,3}?[-.\s]?\d{1,4}?[-.\s]?\d{1,4}?[-.\s]?\d{1,9}?"
              title="Phone number must be digits and can contain spaces, dashes, dots and parentheses. For example: +1 555-555-5555"
              required
              value={this.state.number}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <FilterContacts onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Phonebook;
