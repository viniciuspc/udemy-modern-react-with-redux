import React from "react";
import ReacDOM from "react-dom";

class App extends React.Component {
  //(JavaScript specific) Optional.
  // Is the very first function which will
  // be caled when an instance of this object is created.
  constructor(props) {
    // Call React.Component constructor, which has some
    // amout of setup required for the component to work
    // properly.
    // It is a refence to the parent's constructor.
    super(props);

    // When we do not know the value of a property
    // we default it to null.
    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
    // TO this.state.
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //To update or state we called setState!!
        //The setState method cames from React.Component
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        // setState will only update a state property.
        // It will never add or delete propeties.
        // Other properties will still untouched
        this.setState({ errorMessage: err.message });
      }
    );
  }
  // (React specific) React says we have to define render !!
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReacDOM.render(<App />, document.querySelector("#root"));
