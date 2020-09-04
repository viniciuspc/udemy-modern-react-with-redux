import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}
//The connect function of react-redux returns another function
//Beacuse of this we need the extra set of () passing our component
export default connect()(SongList);
