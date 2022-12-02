import { Form, Label, Input, Button } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <main>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label>
          Name
          <Input type="text" name="name" />
        </Label>
        <Label>
          E-Mail
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Sign Up</Button>
      </Form>
    </main>
  );
}
