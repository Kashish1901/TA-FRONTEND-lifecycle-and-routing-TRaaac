import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: false,
    };
    this.getRandomUser = this.getRandomUser.bind(this);
  }
  componentDidMount() {
    this.getRandomUser();
  }
  getRandomUser() {
    this.setState({ loading: true });
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          person: data.results[0],
          loading: false,
        })
      );
  }
  render() {
    const { person, loading } = this.state;
    console.log(person);
    return (
      <>
        <header></header>
        <div className="container">
          <hr></hr>
          <h1>Get Randon User</h1>

          {loading && <div className="spinner" />}
          {person && (
            <div className="info">
              <img src={person.picture.large} alt="randon person" />
              <div className="details">
                <p>
                  <strong>Name:</strong>
                  {person.name.first} {person.name.last}
                </p>
                <p>
                  <strong>Gender:</strong>
                  {person.gender}
                </p>
                <p>
                  <strong>Email:</strong> {person.email}
                </p>
                <p>
                  <strong>Phone:</strong> {person.phone}
                </p>
                <p>
                  <strong>Location:</strong> {person.location.city},{" "}
                  {person.location.country}
                </p>
              </div>
            </div>
          )}
          <button
            className="btn"
            onClick={this.getRandomUser}
            disabled={loading}
          >
            {" "}
            Randon User
          </button>
        </div>
      </>
    );
  }
}

export default App;
