import React from 'react';
class FilterContacts extends React.Component {
  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        <label>
          Filter contacts by name:
          <input type="text" onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default FilterContacts;
