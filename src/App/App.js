import Notiflix from "notiflix";
import "./App.css";
import styles from "../components/Form/Form.module.css";
import React from "react";
import Contact from "../components/Contact/Contact";
import Form from "../components/Form/Form";
import Filter from "../components/Form/Filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  renderContact = ({ name, number, id }) => {
    const item = {
      id,
      name,
      number,
    };

    if (this.state.contacts.some((item) => item.name === name)) {
      return Notiflix.Notify.warning(`${name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, item],
      }));
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        item.number.includes(this.state.filter)
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.mainTitle}>Phonebook</h1>
          <Form onSubmit={this.renderContact}></Form>
          <h2 className={styles.mainTitle}>Contacts</h2>
          <Filter
            onChange={this.handleInputChange}
            value={this.state.filter}
          ></Filter>
          <Contact
            filter={this.filteredContacts}
            onClick={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
