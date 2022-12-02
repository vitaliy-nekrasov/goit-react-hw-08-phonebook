import { Form, Label, Input, Button } from './ContactForm.styled';
import { useAddContactMutation } from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

export default function ContactForm({ onClose, contacts }) {
  const [addContact] = useAddContactMutation();

  const handlerSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      number: e.target.phone.value,
    };
    const findContact = contacts.find(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(newContact.name.toLocaleLowerCase())
    );
    if (findContact) {
      Notify.failure(`${newContact.name} is already in contacts.`, {
        timeout: 3000,
        distance: '100px',
      });
    } else {
      addContact(newContact);
      Notify.success('Add a new contact success!', {
        timeout: 3000,
        distance: '100px',
      });
    }
    e.target.reset();
    onClose();
  };

  return (
    <Form autoComplete="off" onSubmit={handlerSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Save contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
