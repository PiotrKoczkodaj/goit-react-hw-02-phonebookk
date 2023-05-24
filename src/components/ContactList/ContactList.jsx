import { Component } from "react";
import styles from './ContactList.module.css';
import { nanoid } from 'nanoid'
export class ContactList extends Component{


    render() {


        const { state } = this.props;
       console.log(state)
        return (
            <div>
                {state.contacts.map(contact => <p key={nanoid()}>{contact.name}{contact.number}</p>)}
        </div>
    )
}

}