import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {

    const selectContacts = useSelector(state => state.contacts.contacts.items);
    const selectNameFilter = useSelector(state => state.filters.filters.name);

    const filteredUsers = selectContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim())
  );
    
    return (
        <ul className={styles.contacts}>
            {filteredUsers.map(contact => {
                return (<li key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                        id={contact.id}/>
                </li>)
            })}
      </ul>
  )
}

export default ContactList