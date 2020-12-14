import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useFetchShopData } from "../../customHooks/useFetchShopData";
import Header from "../Header/Header";
import Routes from "../Routes/Routes";
import './App.scss'

const App = () => {
    useFetchShopData()

    return (
        <Router>
            <Header/>
            <main className="App-Container">
                <Routes/>
            </main>
        </Router>
    )
}

export default App;
