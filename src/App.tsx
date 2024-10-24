import React, { useContext } from "react";
import LoginPage from "./pages/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/context";
import HomePage from "./pages/homePage";
import loginPage from "./pages/loginPage";
import PrivateRoute from "./pages/PrivateRoute";
import Contact from "./pages/Contact";
import Table from "./pages/Table";

const App = () => {

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

        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />

        <Route
          path="/table"
          element={
            <PrivateRoute>
              <Table />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
