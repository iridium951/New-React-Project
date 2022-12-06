//import React, { Component } from "react";
import React, { useState } from "react";

function SearchBar() {
  const [name, setName] = useState("");

  const searchMovies = async () => {
    alert("hello " + name);
    console.log('name' + name);
    const data = await fetch(
      `https://api.tvmaze.com/search/shows?q=${name}`
  );
  const dataJson = await data.json();
  //const result = dataJson.results;
  console.log(JSON.stringify(dataJson));
  //setPics(result);
    //const apiUrl = `https://api.tvmaze.com/search/shows?q=${name}`;
 //   fetch(apiUrl)
 //         .then((response) => response.json())
 //         .then((data) => {
 //           const results = data.map((element) => element.show);
            //renderResults(results);
 //           alert("2");
 //         });
    };
  


  return(
  <div>
  <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  />
  <button onClick={() => searchMovies()}>Enter</button>
  </div> 
  )
}

export default SearchBar


/* class SearchBar extends Component {
      render() {
            return (
            <form>
                  <input type="text" placeholder="Search Movies..." />
                  <button>Enter</button>
                  </form>
        )
      }
    }
    export default SearchBar */

/* 
const prepareSearchQuery = (query) => {
      const apiUrl = `http://api.tvmaze.com/search/shows?q=${query}`;


searchShow = function(query) {
      const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;
      fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const results = data.map((element) => element.show);
            renderResults(results);
          });
    };
    
    renderResults = function(results) {
      const list = document.getElementById('resultsList');
      list.innerHTML = '';
      results.forEach((result) => {
        console.log(JSON.stringify(result));
        const element = document.createElement('li');
        const lName = result.name.toLowerCase();
        element.innerHTML = `<div onclick="getShowQuote('${lName}')">${result.name} <b>Get quote</b></div>`;
        list.appendChild(element);
      });
    };
    
    let searchTimeoutToken = 0;
    
    window.onload = () => {
      const searchFieldElement = document.getElementById('searchField');
      searchFieldElement.onkeyup = (event) => {
        clearTimeout(searchTimeoutToken);
    
        searchTimeoutToken = setTimeout(() => {
          searchShow(searchFieldElement.value);
        }, 250);
      };
    };
     */