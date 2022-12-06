import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Components/Header"
import SearchContainer from "./Components/SearchContainer"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <SearchContainer />
  </React.StrictMode> 
);