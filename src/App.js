import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"

function App() {
  return (
  <Router>
  <Header />
     <Routes>
       <Route path='/' element={<Home />} />
     </Routes>
  </Router>
  );
}

export default App;
