import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";

import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

export default function Contact({ contactId, contactName, contactNumber }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(contactId));

  return (
    <div className={css.container}>
      <div className={css["info-bar"]}>
        <div className={css.info}>
          <FaUserAlt />
          <p className={css.text}>{contactName}</p>
        </div>
        <div className={css.info}>
          <FaPhoneAlt />
          {contactNumber}
        </div>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};
