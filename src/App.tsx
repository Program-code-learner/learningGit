import React, { useContext } from 'react'
import LoginPage from './pages/loginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/context';
import HomePage from './pages/homePage';


const App = () => {
  const{isAuthenticated} = useAuth();

  return (
    
      <Router>
      <Routes>
        <Route path='/' element={isAuthenticated ? <HomePage /> : <LoginPage />} />
      </Routes>
    </Router> 
     
  )
}

export default App