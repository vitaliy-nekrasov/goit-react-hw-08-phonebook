import { ContactList } from 'pages/ContactList/ContactList';
import { Box } from './Box/Box';
import { Navigation } from './Navigation/Navigation';
import { RegisterForm } from 'pages/RegisterForm/RegisterForm';
import { LogIn } from 'pages/LogIn/LogIn';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Box pl="30px" pr="30px">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="contacts" element={<ContactList />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </Box>
  );
}
