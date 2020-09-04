import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}

//Take our state, run some computation and pass as props to the component
//State from reducers (redux store)
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

//The connect function of react-redux returns another function
//Beacuse of this we need the second set of () passing our component
export default connect(mapStateToProps)(SongList);
