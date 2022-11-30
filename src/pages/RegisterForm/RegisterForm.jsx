import { Form, Label, Input, Button } from './RegisterForm.styled';

export function RegisterForm() {
  return (
    <main>
      <Form autoComplete="off">
        <Label>
          Name
          <Input type="text" />
        </Label>
        <Label>
          E-Mail
          <Input type="email" />
        </Label>
        <Label>
          Password
          <Input type="password" />
        </Label>
        <Button type="submit">Sign Up</Button>
      </Form>
    </main>
  );
}
