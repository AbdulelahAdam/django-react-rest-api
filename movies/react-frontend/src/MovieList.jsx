import React, { Fragment } from "react";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/movies/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <center>
          <table className="table table-striped table-bordered table-dark ">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th scope="col">Poster</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            {items.map((item) => (
              <tbody key={item.id}>
                <tr style={{ textAlign: "center" }}>
                  <td scope="row"><img src={item.poster} className="img-fluid" alt={item.name} /></td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.year}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </center>
      );
    }
  }
}

export default MovieList;
