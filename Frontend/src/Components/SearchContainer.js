import React from "react"
import SearchResultsList from "./SearchResultsList";
import SearchBar from "./SearchBar"

class SearchContainer extends React.Component {
    state = {
        SearchResults: [

        ]
       };


       setSearchResults = results => {
        console.log(JSON.stringify(results));
        this.setState({    
          SearchResults: results
        });
      };       

  render() {
    return (
    <div>
        <SearchBar setSearchResultsProps={this.setSearchResults} />
        <SearchResultsList SearchResults={this.state.SearchResults} />
    </div>
        );
    }
}

export default SearchContainer   