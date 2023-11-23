import { Component } from "react";
import { nanoid } from "nanoid";
import CreateContact from '../CreateContact';
import ContactList from "../ContactList";
import SearchContact from "../SearchContact";
import { AppContainer, Header } from "./App.styled"; 

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = (contact) => {
    const isAlreadyExist = this.state.contacts.some((el) => el.name.toLowerCase() === contact.name.toLowerCase());
    if (isAlreadyExist) return alert(`${contact.name} is already in contacts.`);
    const newContact = {
      ...contact,
      id: nanoid(),
    }
    this.setState((prev) => ({
      contacts: [newContact, ...prev.contacts],
    }));
  }  

  handleSearchChange = (e) => {
    // console.log('target value', e.target.value);
    this.setState({ filter: e.target.value });
  };

  searchContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }))
  }

  render() {
    // const { filter } = this.state;
    const filteredContacts = this.searchContact();
    return (
      <AppContainer>
        <Header>Phonebook</Header>
        <CreateContact createContact={this.createContact} />
        <Header>Contacts</Header>
        {/* <SearchContact filter={filter} handleSearchChange={this.handleSearchChange} /> */}
        <SearchContact handleSearchChange={this.handleSearchChange} />
        {/* <ContactList contacts={this.state.contacts} /> */}
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </AppContainer>
    );
  }
}
export default App;