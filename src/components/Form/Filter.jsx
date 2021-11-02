import styles from "./Form.module.css";

const Filter = ({ onChange, value }) => {
    return (
        <label>
            <input className={styles.inputSearch} type="text" name="filter" value={value} placeholder="Search contact" onChange={onChange} />
            <button className={styles.button} type="submit">Search</button>
        </label>
    )
}

export default Filter;