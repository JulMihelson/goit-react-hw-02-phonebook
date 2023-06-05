import React from 'react';

import { DeleteContacts } from './DeleteContacts';

export const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <div>
      <span>Contacts</span>
      <ul>
        {contacts.map(contact => (
          <DeleteContacts
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
