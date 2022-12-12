import React, { Component } from "react";

class SearchItemDetails extends Component {
 

  render() {
    console.log("-----"+JSON.stringify(this.props.MovieDetails))
    return <span> 
      {this.props.MovieDetails.name}
      {this.props.MovieDetails.language}
      Genres {this.props.MovieDetails.genres}
      <img src={this.props.MovieDetails.image.medium} alt={this.props.MovieDetails.name}/> 
    </span>
  }


}

export default SearchItemDetails



