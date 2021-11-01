const Input = ({nameChange, text, value}) => {
    return (
<div>
    <h2>Name</h2>
    <input
        type="text"
        name="name"
        value={text}
        onChange={nameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required />
    <input
        type="tel"
        name="number"
        value={value}
        onChange={nameChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required/>
    <button type="button">Add Name</button>
</div>
    )
}

export default Input;