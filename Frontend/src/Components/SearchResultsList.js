import React from "react"
import SearchItem from "./SearchItem";
import "./SearchResultsList.css";

class SearchResultsList extends React.Component {
    render() {
        return (
      <div className="SearchResultsList">
        <ul>
          {this.props.SearchResults.map(SearchResult => (
            <SearchItem key={SearchResult.show.id} SearchResult={SearchResult} setMovieDetailsProps={this.props.setMovieDetailsProps} />
          ))}
        </ul>
      </div>
        )
    }
}

export default SearchResultsList

