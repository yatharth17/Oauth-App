import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from "./components/Home"
import Profile from './components/Profile'
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path="/" component={Home}></Route>
      <Route path="/profile" component={Profile}></Route>
    </BrowserRouter>
  );
}

export default App;
