import React from "react";
import ReacDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div>Hi there!</div>;
};

ReacDOM.render(<App />, document.querySelector("#root"));
