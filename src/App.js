import React from 'react';
import './App.css';
import TopAppBar from './Components/TopBar/topbar';
import Table  from './Components/Table/table';
import {BrowserRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom'
import Details from './Components/Details/details';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopAppBar/>
        <Route exact path = "/" component = {Table}/>
        <Route exact path = "/node/:nodeId" component = {Details}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
