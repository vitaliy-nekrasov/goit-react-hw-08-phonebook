import { Form, Label, Input, Button } from './LogIn.styled';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

export default function LogIn() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.logIn({
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
          E-Mail
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </main>
  );
}
