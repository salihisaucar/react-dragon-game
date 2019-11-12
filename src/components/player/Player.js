import React, { Component } from "react";
import { connect } from "react-redux";
import East from "../../img/player_East.png";
import West from "../../img/player_West.png";
import North from "../../img/player_North.png";
import South from "../../img/player_South.png";

let obj = {};
let playerPosition = East;
class Player extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  setPlayerPosition = (direction) => {
    switch (direction) {
      case "ArrowRight":
        playerPosition = East;
        break;
      case "ArrowLeft":
        playerPosition = West;
        break;
      case "ArrowDown":
        playerPosition = South;
        break;
      case "ArrowUp":
        playerPosition = North;
        break;
    }
  };

  handleKeyPress = (event) => {
    this.setPlayerPosition(event.code);
    if (event.code !== "Space") {
      obj = getDirectionObj(event.code);
    } else {
      this.props.onFire(obj);
    }

    this.props.onRun(event.code);
  };

  render() {
    const { cordinateX, cordinateY } = this.props.player;
    return (
      <img
        Id="playerId"
        src={playerPosition}
        style={{
          height: "60px",
          width: "60px",
          position: "absolute",
          top: cordinateX,
          left: cordinateY
        }}
      />
    );
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onRun: (direction) => dispach({ type: "RUN", value: direction }),
    onFire: (directionObj) => dispach({ type: "FIRE", value: directionObj })
  };
};

const mapStateToProps = (state) => {
  return {
    player: state.player,
    State: state
  };
};

const getDirectionObj = (eventCode) => {
  let directionObj = {
    positionX: 0,
    positionY: 0,
    direction: ""
  };
  switch (eventCode) {
    case "ArrowRight":
      directionObj = {
        positionX:
          document.getElementById("playerId").getBoundingClientRect().top - 90,
        positionY: document.getElementById("playerId").getBoundingClientRect()
          .left,
        direction: "East"
      };
      break;
    case "ArrowLeft":
      directionObj = {
        positionX:
          document.getElementById("playerId").getBoundingClientRect().top - 90,
        positionY: document.getElementById("playerId").getBoundingClientRect()
          .left,
        direction: "West"
      };
      break;
    case "ArrowDown":
      directionObj = {
        positionX:
          document.getElementById("playerId").getBoundingClientRect().top - 90,
        positionY: document.getElementById("playerId").getBoundingClientRect()
          .left,
        direction: "North"
      };
      break;
    case "ArrowUp":
      directionObj = {
        positionX:
          document.getElementById("playerId").getBoundingClientRect().top - 90,
        positionY: document.getElementById("playerId").getBoundingClientRect()
          .left,
        direction: "South"
      };
      break;
  }
  return directionObj;
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Player);
