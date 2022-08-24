import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, parentToken }) => {
  if (!parentToken) {
    return <Navigate to='/login' />;
  }
  return children;
};

export default ProtectedRoute;