import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // Check both state and localStorage as fallback
  const isLoggedIn = isAuthenticated || localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}