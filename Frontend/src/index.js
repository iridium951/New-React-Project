import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Components/Header"
import SearchContainer from "./Components/SearchContainer"


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SearchContainer />
  </React.StrictMode>, 
  document.getElementById("root"))