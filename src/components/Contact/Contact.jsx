const Contact = ({ id, name, number}) => {
    return(
            <li id={id}>
                <p>{name}</p>
                <p>{number}</p>
            </li>
    )
}

export default Contact;