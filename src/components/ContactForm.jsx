import React from 'react';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
    );
  }
}
