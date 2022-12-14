import React from "react"
import SearchResultsList from "./SearchResultsList";
import SearchBar from "./SearchBar"
import SearchItemDetails from "./SearchItemDetails";
import "./SearchContainer.css";

class SearchContainer extends React.Component {
  state = {
    SearchResults: [],
    MovieDetails: {}
  };

  setSearchResults = results => {
    console.log(JSON.stringify(results));
    this.setState({
      SearchResults: results,
      MovieDetails: {}
    });
  };

  setMovieDetails = details => {
    console.log(JSON.stringify(details));
    this.setState({
      SearchResults: this.state.SearchResults,
      MovieDetails: details
    });
  };

  render() {
    return (
      <div className="mainDiv">
        <table>
          <tr>
            <td>
              <SearchBar setSearchResultsProps={this.setSearchResults} />
            </td>
            <td>
              <SearchResultsList SearchResults={this.state.SearchResults} setMovieDetailsProps={this.setMovieDetails} />
            </td>
            <td>
              <SearchItemDetails MovieDetails={this.state.MovieDetails} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default SearchContainer   