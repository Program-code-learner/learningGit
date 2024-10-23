import React, { useContext } from "react";
import LoginPage from "./pages/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/context";
import HomePage from "./pages/homePage";
import loginPage from "./pages/loginPage";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        {/* public route */}
        <Route path="/login" element={<LoginPage />} />

        {/* private route */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        
      </Routes>
    </Router>
  );
};

export default App;
