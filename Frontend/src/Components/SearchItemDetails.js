import React, { Component } from "react";

class SearchItemDetails extends Component {
 

  render() {
    if (!this.props.MovieDetails.name) return null;
    console.log(JSON.stringify(this.props.MovieDetails))
    return <div>
      <h2>{this.props.MovieDetails.name}</h2>
      <p>
      <img src={this.props.MovieDetails.image.medium} alt={this.props.MovieDetails.name}/>
      </p>
      <p>
       Language: {this.props.MovieDetails.language}
      </p>
      <p>
      Genres: {this.props.MovieDetails.genres}
      </p>
    </div>
  }


}

export default SearchItemDetails



