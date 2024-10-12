import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contactsSlice";

import Contact from "../Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact contactId={id} contactName={name} contactNumber={number} />
        </li>
      ))}
    </ul>
  );
}
