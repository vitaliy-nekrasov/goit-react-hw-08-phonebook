import { List, Item, Text, Button, AddButton } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';
import { useState } from 'react';
import { getFilterValue } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';

export function ContactList() {
  const [showModal, setShowModal] = useState(false);
  const [showChangeContactModal, setShowChangeContactModal] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');
  const { data: contacts, isFetching, error } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getFilterValue);

  const visibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <div>
      {error && <Text>Sorry something wrong! :(</Text>}
      {isFetching ? (
        <Loader />
      ) : (
        <div>
          <AddButton
            type="button"
            onClick={() => setShowModal(prevState => !prevState)}
          >
            Add Contact
          </AddButton>
          <Filter />
          <List>
            {visibleContacts().map(contact => {
              return (
                <Item key={contact.id}>
                  <Text>
                    {contact.name}: {contact.number}
                  </Text>
                  <Button
                    type="button"
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setShowChangeContactModal(prevState => !prevState);
                      setName(contact.name);
                      setNumber(contact.number);
                      setId(contact.id);
                    }}
                  >
                    Change contact
                  </Button>
                </Item>
              );
            })}
          </List>
        </div>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(prevState => !prevState)}>
          <ContactForm onClose={() => setShowModal(prevState => !prevState)} />
        </Modal>
      )}
      {showChangeContactModal && (
        <Modal
          onClose={() => setShowChangeContactModal(prevState => !prevState)}
        >
          <UpdateContactForm
            onClose={() => setShowChangeContactModal(prevState => !prevState)}
            name={name}
            number={number}
            id={id}
          />
        </Modal>
      )}
    </div>
  );
}
