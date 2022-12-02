import { Box } from './Box/Box';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/selectors';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const ContactList = lazy(() => import('pages/ContactList/ContactList'));
const RegisterForm = lazy(() => import('pages/RegisterForm/RegisterForm'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const RestrictedRoute = lazy(() => import('./RestrictedRoute/RestrictedRoute'));
const PrivateRoute = lazy(() => import('./PrivateRoute/PrivateRoute'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Box pl="30px" pr="30px">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route
                path="contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactList />}
                  />
                }
              />
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
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LogIn />}
                  />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </Box>
    )
  );
}
