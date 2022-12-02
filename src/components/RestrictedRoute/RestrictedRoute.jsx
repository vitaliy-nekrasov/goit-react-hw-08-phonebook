import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function RestrictedRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
