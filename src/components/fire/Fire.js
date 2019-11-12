import React, { Component } from "react";
import { GenerateFire } from "../../components/fire/generate-fire.js";
import { connect } from "react-redux";

class Fire extends Component {
  componentDidMount() {
    this.interval = setInterval(this.props.onFireDirection, 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return GenerateFire(this.props.fireList);
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onFireDirection: () => dispach({ type: "FIRE_DIRECTION" })
  };
};

const mapStateToProps = (state) => {
  return {
    fireList: state.fireList
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Fire);
