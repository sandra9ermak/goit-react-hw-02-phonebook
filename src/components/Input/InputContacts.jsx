const InputContacts = ({value, onChange}) => {
    return (
<>
    <input
        type="tel"
        name="number"
        value={value}
        onChange={onChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required/>
</>
    )
}

export default InputContacts;