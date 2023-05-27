import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactList extends Component {
  render() {
    const { state } = this.props;
   
    return (
      
      <div>
        {state.contacts.map(contact => (
          <p key={nanoid()}>
            {contact.name}
            {contact.number}
            <button  value={contact.name}>delete</button>
          </p>
        ))}
      </div>
    );
  }
}
