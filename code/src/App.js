import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Quiz from './components/pages/Quiz';
import { BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  
  return (

      <Router>
        <>
          <Header />
          <NavBar />
          <Quiz />
          <Routes>

          </Routes>
        </>
      </Router>
  );
}

export default App;
