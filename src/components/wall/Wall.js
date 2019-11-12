import React, { Component } from "react";

export default class Wall extends Component {
  render() {
    return DrawWalls();
  }
}

const DrawWalls = () => {
  return (
    <div>
      <div className="Wall-1"></div>
      <div className="Wall-2"></div>
      <div className="Wall-3"></div>
      <div className="Wall-4"></div>
      <div className="Wall-5"></div>
      <div className="Wall-6"></div>
    </div>
  );
};
