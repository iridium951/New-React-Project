import React from "react"

class SearchItem extends React.Component {

  render() {
    return <li> 
      {this.props.SearchResult.show.name} 
      <img src={this.props.SearchResult.show.image.medium} alt={this.props.SearchResult.show.name}/> 
      <a href={"https://www.imdb.com/title/"+this.props.SearchResult.show.externals.imdb+"/"} target="_blank">IMDB</a>
    </li>
  }

}

export default SearchItem