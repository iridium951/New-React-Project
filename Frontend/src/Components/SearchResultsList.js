import React from "react"
import SearchItem from "./SearchItem";

class SearchResultsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.SearchResults.map(SearchResult => (
          <SearchItem key={SearchResult.id} SearchResult={SearchResult} />
        ))}
      </ul>
    )
  }
}

export default SearchResultsList

