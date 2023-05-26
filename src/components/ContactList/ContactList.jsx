import { Component } from 'react';
import styles from './ContactList.module.css';
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
            <button
              value={contact.name}
              onClick={e => {
                  console.log(e.target.value);
                  if (e.target.value === contact.name) {
                      
                  }
              }}
            >
              delete
            </button>
          </p>
        ))}
      </div>
    );
  }
}
