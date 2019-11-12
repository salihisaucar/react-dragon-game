import React, { Component } from "react";
import { connect } from "react-redux";
import { GenerateMonster } from "../../components/monster/generate-monster.js";

class Monster extends Component {
  componentDidMount() {
    this.interval = setInterval(this.props.onMove, 200);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return GenerateMonster(this.props.monsterList);
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onMove: () => dispach({ type: "MOVE" })
  };
};

const mapStateToProps = (state) => {
  return {
    monsterList: state.monsterList
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Monster);
