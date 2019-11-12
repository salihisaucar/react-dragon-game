import React, { Component } from "react";
import Player from "../../components/player/Player.js";
import Monster from "../../components/monster/Monster.js";
import Fire from "../../components/fire/Fire.js";
import Wall from "../../components/wall/Wall.js";
import "../../App.css";

import { connect } from "react-redux";

class GameScreen extends Component {
  render() {
    if (this.props.credit > 0) {
      return (
        <div className="Game-Screen">
          <Fire />
          <Player />
          <Monster />
          <Wall />
        </div>
      );
    } else {
      return <div>.......GAME OVER......</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    credit: state.credit
  };
};

export default connect(mapStateToProps)(GameScreen);
