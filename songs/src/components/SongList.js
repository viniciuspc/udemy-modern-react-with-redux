import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    //this.props.songs is comming from the mapStateToProps
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//Take our state, run some computation and pass as props to the component
//State from reducers (redux store)
const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

//The connect function of react-redux returns another function
//Beacuse of this we need the second set of () passing our component
//The connect function will take the function in the second parameter,
//and pass it to the store.dispatch function.
export default connect(mapStateToProps, { selectSong })(SongList);
