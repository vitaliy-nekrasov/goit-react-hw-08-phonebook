import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/selectors';
import PropTypes from 'prop-types';

export default function PrivateRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
