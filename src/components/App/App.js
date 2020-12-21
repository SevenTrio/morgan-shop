import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useFetchShopData } from "../../customHooks/useFetchShopData";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routes from "../Routes/Routes";
import Wrapper from "../Wrapper/Wrapper";
import './App.scss'

const App = () => {
    useFetchShopData()

    return (
        <Router>
            <Header/>
            <Menu/>
            <Wrapper className="App-Wrapper">
                <Routes/>
            </Wrapper>
        </Router>
    )
}

export default App;
