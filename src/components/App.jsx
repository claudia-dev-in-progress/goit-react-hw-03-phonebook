import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }

  handleFormSubmit(event) {
    const existingContact = this.state.contacts.find(
      (contact) => contact.name === event.name
    );
    if (existingContact !== undefined) {
      alert(`${event.name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: event.name,
        number: event.number,
      };

      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  }

  handleFilterChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  filterContacts = () => {
    const filteredContacts = this.state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filteredContacts;
  };

  handleDeleteContact(id) {
    const remainingContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );

    this.setState({
      contacts: remainingContacts,
    });
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.handleFormSubmit}></ContactForm>
        <h1>Contacts</h1>
        <Filter
          value={this.state.filter}
          onFilterChange={this.handleFilterChange}
        ></Filter>
        <ContactList
          contacts={this.filterContacts()}
          onDeleteContact={this.handleDeleteContact}
        ></ContactList>
      </>
    );
  }
}
