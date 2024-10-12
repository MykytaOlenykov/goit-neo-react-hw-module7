import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { addContact } from "../../redux/contactsOps";

import css from "./ContactForm.module.css";

const schema = yup.object().shape({
  name: yup.string().trim().min(3).max(50).required(),
  number: yup
    .string()
    .trim()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "number format: xxx-xx-xx")
    .required(),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    dispatch(addContact({ name: name.trim(), number: number.trim() }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off" noValidate>
        <label className={css.label}>
          Name
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage
            className={css["error-message"]}
            name="name"
            component="span"
          />
        </label>

        <label className={css.label}>
          Number
          <Field className={css.field} type="tel" name="number" />
          <ErrorMessage
            className={css["error-message"]}
            name="number"
            component="span"
          />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
