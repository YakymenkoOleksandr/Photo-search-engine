import { Formik, Form, Field } from 'formik';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import { toast } from 'react-hot-toast';
import css from './SearchBar.module.css';
export default function SearchBar({ handleSubmit }) {
  const handleFormSubmit = (values, actions) => {
    if (!values.searchPhotos) {
      toast.error('Please enter text to search for images.');
    } else {
      handleSubmit(values, actions);
      actions.resetForm();
    }
  };
  return (
    <header>
      <Formik initialValues={{ searchPhotos: '' }} onSubmit={handleFormSubmit}>
        <Form className={css.formForSearch}>
          <div className={css.fieldForSearch}>
            <button type="submit" className={css.buttonForInputField}>
              <PiMagnifyingGlassLight className={css.svg} />
            </button>
            <Field
              className={css.inputField}
              type="text"
              autoComplete="off"
              autoFocus={true}
              placeholder="Search images and photos"
              name="searchPhotos"
            />
          </div>
        </Form>
      </Formik>
    </header>
  );
}
