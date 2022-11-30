import { ContactList } from 'pages/ContactList/ContactList';
import { Box } from './Box/Box';
import { Navigation } from './Navigation/Navigation';
import { RegisterForm } from 'pages/RegisterForm/RegisterForm';
import { LogIn } from 'pages/LogIn/LogIn';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Box pl="30px" pr="30px">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="contacts" element={<ContactList />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
        </Route>
      </Routes>
    </Box>
  );
}
