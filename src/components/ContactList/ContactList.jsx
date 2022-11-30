import { List, Item, Text, Button } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';
import { getFilterValue } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';

export function ContactList() {
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
        <List>
          {visibleContacts().map(contact => {
            return (
              <Item key={contact.id}>
                <Text>
                  {contact.name}: {contact.phone}
                </Text>
                <Button type="button" onClick={() => deleteContact(contact.id)}>
                  Delete
                </Button>
              </Item>
            );
          })}
        </List>
      )}
    </div>
  );
}
