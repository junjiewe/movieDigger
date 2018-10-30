import React, { Component } from "react";
import "./App.css";
import MovieRow from "./movieRow.js";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };

    this.performSearch();
  }

  performSearch = searchItem => {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" +
      searchItem;

    $.ajax({
      url: urlString,
      success: searchResult => {
        const results = searchResult.results;
        console.log(results);
        let movies = results.map(movie => {
          movie.poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          return <MovieRow key={movie.id} movie={movie} />;
        });
        this.setState({ rows: movies });
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data");
      }
    });
  };

  onChangeHandler = event => {
    const searchItem = event.target.value;
    this.performSearch(searchItem);
  };

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" height="50" src="./search.svg" alt="" />
              </td>
              <td width="10" />
              <td>
                <h1>Movie Digger - The MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          className="searchBar"
          onChange={this.onChangeHandler.bind(this)}
          placeholder="Enter movie name"
        />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
