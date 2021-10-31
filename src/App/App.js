import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "../components/Input/Input";
import Contact from "../components/Contact/Contact";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
  };

  renderName = () => {
    this.setState((prevState) => {
      return {
        name: prevState(Input),
      };
    });
  };

  render() {
    return (
      <>
        <Input></Input>
        <Contact id={uuidv4()} name={this.renderName}></Contact>
      </>
    );
  }
}
console.log(uuidv4());

export default App;
