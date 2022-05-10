import React from "react";
import { Card } from "react-bootstrap";
import "./App.scss";
import Shows from "./pages/shows/shows";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portofolio from "./pages/finished/finished";
import About from "./pages/watchlist/watchlist";
import Carusel from "./components/caruselComponent/caruselComponent";
import Watchlist from "./pages/watchlist/watchlist";
import Finished from "./pages/finished/finished";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Carusel />
        <Routes>
          <Route index path="/" element={<Shows />} />
          <Route path="portofolio" element={<Finished />} />
          <Route path="about" element={<Watchlist />} />
        </Routes>
        
      
     
      </Router>
      
    </div>
  );
}

export default App;
