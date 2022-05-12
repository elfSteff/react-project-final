import React from "react";
// import { Card } from "react-bootstrap";
import "./App.scss";
import Shows from "./pages/shows/shows";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./pages/watchlist/watchlist";
import FinishedList from "./pages/finished/finished";
import { Store, StoreProvider } from './context/store';
import Carusel from "./components/caruselComponent/caruselComponent";
import Details from "./pages/details/details";
// import { BrowserRouter } from 'react-router-dom'
import { BingewatcherMain } from '../src/pages/bingewatcher/bingewatcherMain';

function App() {

  return (
    <StoreProvider>
    <div className="App">
      <Router>
        <Header /> 
           
        <Routes>
        <Route index path="/" element={<BingewatcherMain />} />
         <Route index path="/bingewatcherMain" element={<BingewatcherMain />} />
         <Route path="/details" element = {<Details />} />
         <Route path="/shows" element={<Shows />} />
         <Route path="/finished" element={<FinishedList />} />
         <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </div>
    </StoreProvider>
    )};
export default App;
