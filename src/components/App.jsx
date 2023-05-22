import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
export class App extends Component {

state = {
  contacts: [],
  name: ''
}
  
  
  render() {
    
    

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const nameValue = form.elements[0].value;
      console.log(form.elements[0].value);
      
      this.setState({})
      this.setState(this.state.contacts.push({}))
    };

  
console.log(this.state)
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection:'column'
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm submit={handleSubmit}  />
      <h2>Contacts</h2>
      <ContactList/>
    </div>
  );
  }

}
