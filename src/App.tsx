import React, { useContext } from 'react'
import LoginPage from './pages/loginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/context';


const App = () => {
  const{isAuthenticated} = useAuth();

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router> 
    </div>
  )
}

export default App