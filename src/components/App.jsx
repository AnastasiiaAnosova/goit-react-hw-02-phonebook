import { Component } from "react";
import { nanoid } from "nanoid";
import CreateContact from './CreateContact';
import ContactList from "./ContactList";
import SearchContact from "./SearchContact";

class App extends Component {

//   state = {
//     contacts: [],
//     filter: '',
//     name: '',
//     number: ''
// }
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  createContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid(),
    }
    this.setState((prev) => ({
      contacts: [newContact, ...prev.contacts],
    }));
  }  

  handleSearchChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  searchContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // searchContact = (searchQuery) => {
  //   this.setState((prev) => ({
  //     filter: prev.contacts.filter((el) => 
  //       el.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     ),
  //   }))
  // }
  
  render() {
    const { filter } = this.state;
    const filteredContacts = this.searchContact();
    return (
      <>
        <h2>Phonebook</h2>
        <CreateContact createContact={this.createContact} />
        <h2>Contacts</h2>
        {/* <SearchContact searchContact={this.searchContact} /> */}
        <SearchContact filter={filter} handleSearchChange={this.handleSearchChange} />
        {/* <ContactList contacts={this.state.contacts} /> */}
        <ContactList contacts={filteredContacts} />
      </>
    );
  }
}
export default App;
