import { Form, Label, Input, Button } from './LogIn.styled';

export function LogIn() {
  return (
    <main>
      <Form autoComplete="off">
        <Label>
          E-Mail
          <Input type="email" />
        </Label>
        <Label>
          Password
          <Input type="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </main>
  );
}
