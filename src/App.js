import React from "react"

import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms/" component={Rooms}/>
    <Route exact path="/single-room" component={SingleRoom}/>
    </Routes>
      
    </>
  );
}

export default App;
