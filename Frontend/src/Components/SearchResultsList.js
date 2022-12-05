import React from "react"

class SearchResultsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.SearchResults.map(SearchResult => (
          <li key={SearchResult.id}>{SearchResult.MovieTitle}</li>
        ))}

      </ul>
    )
  }
}
export default SearchResultsList

