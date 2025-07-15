import { Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack'; // ✅ Import this
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Navbar />
      
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        preventDuplicate
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SnackbarProvider>
    </>
  );
}

export default App;
