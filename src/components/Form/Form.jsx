import React from "react";

class Form extends React.Component {
    state = {
        name: "",
        number: "",
    }

      renderName = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
    };
    
    reset = () => {
   this.setState({ name: "", number: "" });
    };
    
    formSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state);

        this.reset();
    };
    

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <label>
                    <h2>Name</h2>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.renderName}
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required />
                </label>
                <label>
                    <h2>Number</h2>
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.renderName}
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required />
                </label>
                <button type="submit">Add name</button>
            </form>
        )
    }
}

export default Form;