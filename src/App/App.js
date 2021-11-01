import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Contact from "../components/Contact/Contact";
/* import InputPerson from "../components/Input/InputPerson";
import InputContacts from "../components/Input/InputContacts";
import InputButton from "../components/Input/InputButton"; */
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

  formHandlerSubmit = (data) => {
    console.log(data);
  };

  // handleInputChange = (event) => {
  //   this.setState({
  //     [event.currentTarget.filter]: event.currentTarget.value,
  //   });
  // };

  filterSubmit = (event) => {
    this.setState({
      [event.currentTarget.filter]: event.currentTarget.value,
    });
    console.log(this.state.filter);
  };

  render() {
    return (
      <>
        {/* <form onSubmit={this.formSubmit}>
          <label>
            <InputPerson
              value={this.state.name}
              onChange={this.renderName}
            ></InputPerson>
            <InputContacts
              value={this.state.contacts}
              onChange={this.renderName}
            ></InputContacts>
            <InputButton text="Add name"></InputButton>
          </label>
        </form> */}
        <Form onSubmit={this.formHandlerSubmit}></Form>
        <Filter onChange={this.filterSubmit}></Filter>
        {/* <Contact
          id={uuidv4()}
          name={this.state.name}
          number={this.state.number}
        ></Contact> */}
        <ul>
          {this.state.contacts.map((item) => (
            <Contact key={item.id} name={item.name} number={item.number} />
          ))}
        </ul>
      </>
    );
  }
}
// console.log(uuidv4());

export default App;
