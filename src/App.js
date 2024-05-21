import React, { useContext } from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import CreateFeed from './pages/CreateFeed';
import Profile from './pages/Profile';
import Communities from './pages/Communities';
import { AuthContext } from './context/AuthContext';
import LogOutNav from './components/LogOutNav';
import Admin from './Admin';
import AboutUs from './components/AboutUs';

const App = () => {
  const currentUser = useContext(AuthContext);
  const location = useLocation();

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const isAdminRoute = () => {
    return location.pathname.startsWith('/admin');
  };

  return (
    <>
      {!isAdminRoute() && (currentUser ? <Navbar /> : <LogOutNav />)}
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<AboutUs />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path='/create-feed' element={<ProtectedRoute><CreateFeed /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/community' element={<ProtectedRoute><Communities /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default App;
