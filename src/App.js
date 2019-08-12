import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Navbar from './components/navbar/Navbar';
import RegisterPage from './components/pages/RegisterPage';
import HomePage from './components/pages/HomePage';






function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="main">
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
      </div>  
    </BrowserRouter>
  );
}

export default App;
