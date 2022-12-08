import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    name: "",
  }
 
   searchMovies = async () => {
    console.log('name' + this.state.name);
    const data = await fetch(
      `https://api.tvmaze.com/search/shows?q=${this.state.name}`
  );
  const dataJson = await data.json();
  console.log(JSON.stringify(dataJson));
  this.props.setSearchResultsProps(dataJson);
    };
  
    setName = newName => {
      this.setState({
        name: newName,
      })
    }

  render() {
    return(
  <div>
  <input
  type="text"
  placeholder="Type movie name here..."
  value={this.state.name}
  onChange={(e) => this.setName(e.target.value)}
  />
  <button onClick={() => this.searchMovies()}>Enter</button>
  </div> 
  )
}
}

export default SearchBar