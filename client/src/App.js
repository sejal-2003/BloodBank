import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import LoginForm from './pages/auth/LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
function App() {
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route
        path='/' 
        element={
      <ProtectedRoute>
        <HomePage/>
      </ProtectedRoute>
      }
      />
      <Route
       path='/login' 
       element={
       <PublicRoute>
        <LoginForm/>
       </PublicRoute>
      }
      />
      <Route 
        path='/register'
        element={
        <PublicRoute>
          <Register/>
        </PublicRoute>
      }
      />
    </Routes>
    </>
  );
}

export default App;
