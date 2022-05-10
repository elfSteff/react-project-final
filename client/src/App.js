import React from "react";
import { Card } from "react-bootstrap";
import "./App.scss";
import Shows from "./pages/shows/shows";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./pages/watchlist/watchlist";
import FinishedList from "./pages/finished/finished";
import { Store } from './context/store';

function App() {
  const initState = {
    shows: [],
    watched: [],
    finished: []
}
  return (
    <Store.Provider value={initState}>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Shows />} />
          <Route path="/finished" element={<FinishedList />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </div>
    </Store.Provider>
  );
}

export default App;
