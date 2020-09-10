import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AuthContext from './Context/AuthContext'
function App() {
  return (
    <Router>
    <AuthContext>
    </AuthContext>
    </Router>
  );
}

export default App;
