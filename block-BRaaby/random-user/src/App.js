import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    console.log(this.state.data);
    return (
      <>
        <header></header>
        <div className="container">
          <hr></hr>
          <img src="" alt="user-image" />
          <h4>my name is this</h4>
          <h2>John</h2>
          <div className="nav flex">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-envelope-open"></i>
            <i class="fa-solid fa-calendar-xmark"></i>
            <i class="fa-solid fa-map-location"></i>
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-lock"></i>
          </div>
          <button className="btn">Randon User</button>
        </div>
      </>
    );
  }
}

export default App;
