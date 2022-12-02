import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function RestrictedRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
