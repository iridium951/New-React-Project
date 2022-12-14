import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer';
import Header from "./Components/Header"
import SearchContainer from "./Components/SearchContainer"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <SearchContainer />
    <Footer />
  </React.StrictMode> 
);