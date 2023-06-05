import React from 'react';

export const DeleteContacts = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};
