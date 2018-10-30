import React from "react";

class MovieRow extends React.Component {
  viewMovie = () => {
    const movieURL = "http://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = movieURL;
  };

  playMovie = () => {
    const playURL =
      "https://api.themoviedb.org/3/movie/" +
      this.props.movie.id +
      "/videos?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=en-US";
    window.location.href = playURL;
  };

  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img src={this.props.movie.poster} alt="poster" />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="view"
              />
              <input
                type="button"
                onClick={this.playMovie.bind(this)}
                value="play"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
