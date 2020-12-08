import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header/Header";
import Routes from "../Routes/Routes";
import './App.scss'

const App = () => {
  return (
      <Router>
        <Header/>
        <div className="App-Wrapper">
          <Routes/>
        </div>
      </Router>
  )
}

export default App;
