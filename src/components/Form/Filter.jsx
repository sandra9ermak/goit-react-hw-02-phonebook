const Filter = ({onChange}) => {
    return (
        <label>
            <input type="text" name="filter" placeholder="Search contact" onChange={onChange} />
            <button type="submit">Search</button>
        </label>
    )
}

export default Filter;