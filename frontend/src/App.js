import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/login';
import EmployeeDashboard from './Pages/EmployeePage/EmployeeDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
