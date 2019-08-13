import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Navbar from './components/navbar/Navbar';
import RegisterPage from './components/pages/RegisterPage';
import HomePage from './components/pages/HomePage';
import CarPage from './components/pages/CarPage';
import UserProfile from './components/user/UserProfile';






function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="main">
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/cars" component={CarPage} />
        <Route exact path="/users/:username" component={UserProfile} />
      </div>  
    </BrowserRouter>
  );
}

export default App;
