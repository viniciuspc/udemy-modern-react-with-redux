import React from "react";
import ReacDOM from "react-dom";

class App extends React.Component {
  //(JavaScript specific) Optional. Is the very first function which will be caled when an instance of this object is created.
  constructor(props) {
    //Call React.Component constructor, which has some amout of setup required for the component to work properly.
    //It is a refence to the parent's constructor.
    super(props);
    //When we do not know the value of a property we default it to null
    this.state = { lat: null };
  }
  // (React specific) React says we have to define render !!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

ReacDOM.render(<App />, document.querySelector("#root"));
