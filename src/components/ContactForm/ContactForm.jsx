import { Form, Label, Input, Button } from './ContactForm.styled';
import { useAddContactMutation } from 'redux/contactsSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';

export function ContactForm({ onClose }) {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handlerSubmit = e => {
    e.preventDefault();
    const contact = {
      name: e.target.name.value,
      number: e.target.phone.value,
    };
    e.target.reset();
    console.log(data);
    addContact(contact);
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
