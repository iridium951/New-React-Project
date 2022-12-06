import React from "react"

class SearchItem extends React.Component {
  render() {
    return <li>{this.props.SearchResult.MovieTitle}</li>
}
}

export default SearchItem