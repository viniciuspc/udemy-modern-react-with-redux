import React from "react";
import ReacDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //To update or state we called setState!!
      //The setState method cames from React.Component
      (position) => this.setState({ lat: position.coords.latitude }),

      // setState will only update a state property.
      // It will never add or delete propeties.
      // Other properties will still untouched
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request." />;
  }

  // (React specific) React says we have to define render !!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReacDOM.render(<App />, document.querySelector("#root"));
