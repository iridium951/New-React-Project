import React from "react"

class SearchItem extends React.Component {

    render() {
        if (!this.props.SearchResult.show) return null;
        return <li>
      <img src={this.props.SearchResult.show.image.medium} alt={this.props.SearchResult.show.name} height="50px" /> &nbsp;
      {this.props.SearchResult.show.name} &nbsp;
      <span onClick={() => this.props.setMovieDetailsProps(this.props.SearchResult.show)}>Show details</span> &nbsp;
      <a href={"https://www.imdb.com/title/" + this.props.SearchResult.show.externals.imdb + "/"} target="_blank">IMDB</a>
    </li>
    }

}

export default SearchItem