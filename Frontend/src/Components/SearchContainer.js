import React from "react"
import SearchResultsList from "./SearchResultsList";

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
        <SearchResultsList SearchResults={this.state.SearchResults} />
        </div>
        );
    }
}

export default SearchContainer   