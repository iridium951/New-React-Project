import React from "react"
import SearchResultsList from "./SearchResultsList";
import SearchBar from "./SearchBar"

class SearchContainer extends React.Component {
    state = {
        SearchResults: [
          {
            id: 1,
            MovieTitle: "The Office",
          },
          {
            id: 2,
            MovieTitle: "Avatar",
          },
          {
            id: 3,
            MovieTitle: "Die Hard",
          }
        ]
       };

  render() {
    return (
    <div>
        <SearchBar />
        <SearchResultsList SearchResults={this.state.SearchResults} />
    </div>
        );
    }
}

export default SearchContainer   