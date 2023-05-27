import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactList extends Component {
  render() {
    const { state } = this.props;
    return (
      <div>
        {state.contacts.map(contact => (
          <p key={nanoid()}>
            {contact.name}{' '} 
              {contact.number}
            <button
              onClick={() => {
                let index = state.contacts.indexOf(contact);
                this.setState(state.contacts.splice(index, 1));
              }}
              value={contact.name}
            >
              delete
            </button>
          </p>
        ))}
      </div>
    );
  }
}
