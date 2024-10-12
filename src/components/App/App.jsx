import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";

import { fetchContacts } from "../../redux/contactsOps";

import ContactForm from "../ContactForm";
import SearchBox from "../SearchBox";
import ContactList from "../ContactList";
import css from "./App.module.css";
import Loader from "../Loader/Loader";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Loader />
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    </div>
  );
}
