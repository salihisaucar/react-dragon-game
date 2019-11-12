import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/InformationPanel/information-panel.css";

class InformationPanel extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Player Score</th>
              <th>Player Credit</th>
              <th>Remain Shot Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salih Isa</td>
              <td>{this.props.score}</td>
              <td>{this.props.credit}</td>
              <td>{this.props.shotCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// const mapDispachToProps = (dispach) => {
//   return {
//     onChangeScore: () => dispach({ type: "CHANGE_SCORE" })
//   };
// };

const mapStateToProps = (state) => {
  return {
    score: state.score,
    credit: state.credit,
    shotCount: state.shotCount
  };
};

export default connect(mapStateToProps)(InformationPanel);
