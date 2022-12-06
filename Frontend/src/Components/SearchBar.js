import React, { Component } from "react";

class SearchBar extends Component {
      render() {
            return (
            <form>
                  <input type="text" placeholder="Search Movies..." />
                  <button>Enter</button>
                  </form>
        )
      }
    }
    export default SearchBar

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